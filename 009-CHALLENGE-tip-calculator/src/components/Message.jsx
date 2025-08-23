export default function Message({ total, bill, tip }) {
  return (
    <div>
      <p>
        You pay ${total} (${bill} + ${tip} tip);
      </p>
    </div>
  );
}
