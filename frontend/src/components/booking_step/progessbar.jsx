export default function ProgressBar({ step }) {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${(step - 1) * 33}%` }}></div>
    </div>
  );
}
