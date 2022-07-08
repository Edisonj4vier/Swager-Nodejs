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
const videogameSchema = new Schema<IVideogame>({
    title: {type: String},
    description: {type: String},
    category: {type: String},
    effectiveDate: {type: Date},
    price: {type: Number},
});

//Model 
const Videogame = model<IVideogame>('Videogame',videogameSchema);
export {Videogame}