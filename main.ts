import { series } from "./data";
import { createSeriesTable } from "./createSeriesTable";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("series-container");
  if (container) {
    container.innerHTML = createSeriesTable(series);
  }
});
