import React, { useState } from "react";
import Step1SelectBranch from "../../components/booking_step/step1_Branch";
import Step2SelectService from "../../components/booking_step/step2_services";
import Step3SelectTime from "../../components/booking_step/step3_time";
import Step4Confirm from "../../components/booking_step/step4_confirm";
import ProgressBar from "../../components/booking_step/progessbar";
import "./booking.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    branch: "",
    service: null,
    guests: 1,
    time: "",
    name: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="form-container">
      <ProgressBar step={step} />
      {step === 1 && (
        <Step1SelectBranch
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2SelectService
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3SelectTime
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && <Step4Confirm formData={formData} prevStep={prevStep} />}
    </div>
  );
}
