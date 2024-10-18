"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeriesTable = createSeriesTable;
function createSeriesTable(series) {
    var tableHeader = "\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Channel</th>\n          <th>Seasons</th>\n        </tr>\n      </thead>\n      <tbody>\n  ";
    var tableBody = series
        .map(function (serie) { return "\n        <tr>\n          <td>".concat(serie.id, "</td>\n          <td>").concat(serie.name, "</td>\n          <td>").concat(serie.channel, "</td>\n          <td>").concat(serie.seasons, "</td>\n        </tr>\n      "); })
        .join("");
    var averageSeasons = (series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0) / series.length).toFixed(1);
    var tableFooter = "</tbody></table>\n    <p>Seasons average: ".concat(averageSeasons, "</p>");
    return "".concat(tableHeader).concat(tableBody).concat(tableFooter);
}
