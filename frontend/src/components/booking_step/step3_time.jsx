import React from "react";

export default function Step3SelectTime({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const timeSlots = Array.from({ length: 13 }, (_, i) => `${9 + i}:00`);

  return (
    <div className="step">
      <h2>Chọn khung giờ</h2>
      <div className="time-grid">
        {timeSlots.map((time, index) => (
          <div
            key={index}
            className={`time-slot ${formData.time === time ? "active" : ""}`}
            onClick={() => setFormData({ ...formData, time })}
          >
            {time}
          </div>
        ))}
      </div>

      <div className="btn-group">
        <button onClick={prevStep} className="btn-prev">
          Quay lại
        </button>
        <button
          disabled={!formData.time}
          onClick={nextStep}
          className="btn-next"
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}
