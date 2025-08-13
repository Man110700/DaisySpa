export default function Step1SelectBranch({ formData, setFormData, nextStep }) {
  const branches = ["Cơ sở 1 - Quận 1", "Cơ sở 2 - Quận 3", "Cơ sở 3 - Quận 7"];

  return (
    <div className="step">
      <h2>Chọn cơ sở</h2>
      <select
        value={formData.branch}
        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
      >
        <option value="">-- Chọn cơ sở --</option>
        {branches.map((branch, index) => (
          <option key={index} value={branch}>
            {branch}
          </option>
        ))}
      </select>
      <button
        disabled={!formData.branch}
        onClick={nextStep}
        className="btn-next"
      >
        Tiếp tục
      </button>
    </div>
  );
}
