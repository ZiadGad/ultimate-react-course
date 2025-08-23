export default function ResetButton({ onReset, children }) {
  return <button onClick={onReset}>{children}</button>;
}
