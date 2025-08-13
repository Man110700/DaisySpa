import React, { useState } from "react";

export default function Step4Confirm({ formData, prevStep }) {
  const [name, setName] = useState("");

  return (
    <div className="step">
      <h2>Xác nhận thông tin</h2>
      <p>
        <strong>Cơ sở:</strong> {formData.branch}
      </p>
      <p>
        <strong>Dịch vụ:</strong> {formData.service?.name}
      </p>
      <p>
        <strong>Số khách:</strong> {formData.guests}
      </p>
      <p>
        <strong>Khung giờ:</strong> {formData.time}
      </p>

      <label>Nhập tên của bạn:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="btn-group">
        <button onClick={prevStep} className="btn-prev">
          Quay lại
        </button>
        <button
          className="btn-submit"
          onClick={() => alert(`Cảm ơn ${name}, bạn đã đăng ký thành công!`)}
        >
          Xác nhận
        </button>
      </div>
    </div>
  );
}
