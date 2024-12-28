import { useEffect, useState } from "react";

import "./styles/Styles.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update the mouse position whenever the mouse moves
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // Add event listener for mouse movement on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="background-overlay navy-background"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <h1>App</h1>
    </div>
  );
}

export default App;
