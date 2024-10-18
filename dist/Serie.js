"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(_a) {
        var id = _a.id, name = _a.name, channel = _a.channel, seasons = _a.seasons, description = _a.description, webpage = _a.webpage, image = _a.image;
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.webpage = webpage;
        this.image = image;
    }
    return Serie;
}());
exports.Serie = Serie;
