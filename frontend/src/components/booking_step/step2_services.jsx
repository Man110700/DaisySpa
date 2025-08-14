import React, { useState } from "react";

export default function Step2SelectService({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const services = [
    { name: "Massage toàn thân", price: 500000 },
    { name: "Chăm sóc da mặt", price: 300000 },
    { name: "Tẩy tế bào chết", price: 200000 },
  ];

  const [selectedServices, setSelectedServices] = useState(
    formData.services || []
  );

  // Toggle chọn dịch vụ
  const toggleService = (service) => {
    const exists = selectedServices.find((s) => s.name === service.name);
    if (exists) {
      setSelectedServices(
        selectedServices.filter((s) => s.name !== service.name)
      );
    } else {
      setSelectedServices([...selectedServices, { ...service, quantity: 1 }]);
    }
  };

  // Cập nhật số lượng
  const changeQuantity = (serviceName, delta) => {
    setSelectedServices((prev) => {
      return prev
        .map((s) =>
          s.name === serviceName ? { ...s, quantity: s.quantity + delta } : s
        )
        .filter((s) => s.quantity > 0); // Xóa nếu quantity <= 0
    });
  };

  // Tính tổng tiền
  const totalPrice = selectedServices.reduce(
    (sum, s) => sum + s.price * s.quantity,
    0
  );

  return (
    <div className="step">
      <h2>Chọn dịch vụ</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {services.map((service, i) => {
          const isSelected = selectedServices.some(
            (s) => s.name === service.name
          );
          const quantity =
            selectedServices.find((s) => s.name === service.name)?.quantity ||
            1;

          return (
            <div
              key={i}
              onClick={() => toggleService(service)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px 20px",
                minHeight: "75px",
                borderRadius: "10px",
                border: isSelected ? "2px solid #4CAF50" : "1px solid #ccc",
                backgroundColor: isSelected ? "#e8f5e9" : "#fff",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSelected)
                  e.currentTarget.style.backgroundColor = "#f9f9f9";
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = "#fff";
              }}
            >
              <div>
                <strong>{service.name}</strong>
                <div>{service.price.toLocaleString()} VNĐ</div>
              </div>

              {isSelected && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  onClick={(e) => e.stopPropagation()} // tránh toggle khi bấm nút
                >
                  <button
                    onClick={() => changeQuantity(service.name, -1)}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "1px solid #4CAF50",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: "18px",
                      lineHeight: "1",
                    }}
                  >
                    −
                  </button>
                  <span style={{ minWidth: "20px", textAlign: "center" }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => changeQuantity(service.name, 1)}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "1px solid #4CAF50",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: "18px",
                      lineHeight: "1",
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p style={{ marginTop: "20px" }}>
        <strong>Tổng tiền:</strong> {totalPrice.toLocaleString()} VNĐ
      </p>

      <div className="btn-group" style={{ marginTop: "20px" }}>
        <button onClick={prevStep} className="btn-prev">
          Quay lại
        </button>
        <button
          disabled={selectedServices.length === 0}
          onClick={() => {
            setFormData({
              ...formData,
              services: selectedServices,
            });
            nextStep();
          }}
          className="btn-next"
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}
