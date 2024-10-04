"use client";
import { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid(-1, -1); // Перерисовка сетки при изменении размеров экрана
    };

    const gridSize = 50; // Размер клеток сетки

    const drawGrid = (mouseX, mouseY) => {
      const width = canvas.width;
      const height = canvas.height;

      // Очищаем и заливаем фон чёрным
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          // Вычисляем расстояние от текущей линии до курсора по X и Y
          const distX = Math.abs(mouseX - x);
          const distY = Math.abs(mouseY - y);
          const distToMouse = Math.min(distX, distY); // Берем минимальное расстояние до ближайшей линии

          // Подсвечиваем линии, находящиеся ближе 100 пикселей
          if (distToMouse < 100) {
            ctx.strokeStyle = `rgba(0, 120, 255, ${1 - distToMouse / 100})`; // Синий цвет с плавной прозрачностью
          } else {
            ctx.strokeStyle = "#555"; // Серый цвет для остальных линий
          }

          // Рисуем вертикальную линию
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();

          // Рисуем горизонтальную линию
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }
    };

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      drawGrid(mouseX, mouseY); // Рисуем сетку с учетом позиции мыши
    };

    // Добавляем обработчики событий
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    // Инициализация канваса и сетки
    resizeCanvas();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default CanvasBackground;
