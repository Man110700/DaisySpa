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

  const [selectedService, setSelectedService] = useState(
    formData.service || services[0]
  );
  const [guests, setGuests] = useState(formData.guests);

  const totalPrice = selectedService ? selectedService.price : 0;

  return (
    <div className="step">
      <h2>Chọn dịch vụ</h2>
      <select
        value={selectedService.name}
        onChange={(e) =>
          setSelectedService(services.find((s) => s.name === e.target.value))
        }
      >
        {services.map((service, i) => (
          <option key={i} value={service.name}>
            {service.name} - {service.price.toLocaleString()} VNĐ
          </option>
        ))}
      </select>

      <label>Số khách:</label>
      <input
        type="number"
        value={guests}
        min={1}
        onChange={(e) => setGuests(e.target.value)}
      />

      <p>
        <strong>Giá dịch vụ:</strong> {selectedService.price.toLocaleString()}{" "}
        VNĐ
      </p>
      <p>
        <strong>Tổng tiền:</strong> {totalPrice.toLocaleString()} VNĐ
      </p>

      <div className="btn-group">
        <button onClick={prevStep} className="btn-prev">
          Quay lại
        </button>
        <button
          onClick={() => {
            setFormData({ ...formData, service: selectedService, guests });
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
