"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videogame = void 0;
const mongoose_1 = require("mongoose");
//Schema
const videogameSchema = new mongoose_1.Schema({
    title: { type: String },
    description: { type: String },
    category: { type: String },
    effectiveDate: { type: Date },
    price: { type: Number },
});
//Model 
const Videogame = (0, mongoose_1.model)('Videogame', videogameSchema);
exports.Videogame = Videogame;
