import CanvasBackground from "./components/CanvasBackground";

export default function Home() {
  return (
    <div>
      <CanvasBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Мое Портфолио</h1>
        {/* Другой контент */}
      </div>
    </div>
  );
}
