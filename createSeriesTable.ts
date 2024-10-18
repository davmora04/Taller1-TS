import { Serie } from "./Serie";

export function createSeriesTable(series: Serie[]): string {
  const tableHeader = `
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Channel</th>
          <th>Seasons</th>
        </tr>
      </thead>
      <tbody>
  `;
  const tableBody = series
    .map(
      (serie) => `
        <tr>
          <td>${serie.id}</td>
          <td>${serie.name}</td>
          <td>${serie.channel}</td>
          <td>${serie.seasons}</td>
        </tr>
      `
    )
    .join("");
  const averageSeasons = (series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length).toFixed(1);
  const tableFooter = `</tbody></table>
    <p>Seasons average: ${averageSeasons}</p>`;
  return `${tableHeader}${tableBody}${tableFooter}`;
}