"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var createSeriesTable_1 = require("./createSeriesTable");
document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("series-container");
    if (container) {
        container.innerHTML = (0, createSeriesTable_1.createSeriesTable)(data_1.series);
    }
});
