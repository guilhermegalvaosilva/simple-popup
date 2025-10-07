import { useState } from "react";
import Popup from "./components/Popup"; // Corrigido o caminho do import

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Vitae 💥</h1>
      <button onClick={() => setIsOpen(true)}>Abrir Popup</button>

      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Olá, Gui 👋</h2>
        <p>Este é o teu primeiro popup em React!</p>
      </Popup>
    </div>
  );
}
