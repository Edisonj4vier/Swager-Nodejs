import { Schema, model } from "mongoose";

//Interface
export interface IVideogame {
    title:              string;
    description:        string;
    category:           string;
    effectiveDate:      null | Date;
    price:              number;
}

//Schema
const mongoosePaginate = require('mongoose-paginate-v2');
const videogameSchema = new Schema<IVideogame>({
    title: {type: String},
    description: {type: String},
    category: {type: String},
    effectiveDate: {type: Date},
    price: {type: Number},
});

//Model 
videogameSchema.plugin(mongoosePaginate);
const Videogame = model<IVideogame>('Videogame',videogameSchema);
export {Videogame}