import { useEffect, useRef } from "react";
import "./LiveBackgroundChart.css";

export default function LiveBackgroundChart({ symbol = "NASDAQ:AAPL" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Remove any previously injected widget
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: "1",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1", // candlestick
      locale: "en",
      backgroundColor: "rgba(0, 0, 0, 0)",
      gridColor: "rgba(255, 255, 255, 0.04)",
      hide_top_toolbar: true,
      hide_legend: false,
      hide_side_toolbar: true,
      allow_symbol_change: false,
      save_image: false,
      calendar: false,
      hide_volume: false,
      support_host: "https://www.tradingview.com",
    });

    containerRef.current.appendChild(script);
  }, [symbol]);

  return (
    <div className="HeroChart" aria-hidden>
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
