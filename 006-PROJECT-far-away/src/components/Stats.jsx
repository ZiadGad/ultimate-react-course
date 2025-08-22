export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numItemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "You got everything! Reaedy to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed ${numItemsPacked} (${precentage}%)`}
      </em>
    </footer>
  );
}
