import { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const answer = window.confirm("Are You sure you need to clear the list?");
    if (!answer) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItems={handleRemoveItem}
        onToggleItems={handleToggleItem}
        onClear={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
