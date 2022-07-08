import { Request, Response } from "express";
import { IResponse } from "../models/responce.model";
import { IVideogame, Videogame } from "../models/videogame.model";

export const createVideogame = async(req: Request, res: Response)=> {
    const { title,description,category,effectiveDate,price }: IVideogame = req.body;
    const response = await new VideogameController().create({title,description,category,effectiveDate,price });
    return res.status(response.status).json(response);
}

export const retrieveVideogame = async(req: Request, res: Response)=> {
    const docId: String = req.params.id;
    const response = await new VideogameController().retrieve(docId);
    return res.status(response.status).json(response);
}

export const updateVideogame = async (req: Request, res: Response) => {
    const { title, description, category, effectiveDate, price}: IVideogame = req.body;
    const docId: String = req.params.id;
    const response = await new VideogameController().update(docId, {title, description, category, effectiveDate, price});
    return res.status(response.status).json(response);
}

export const deleteVideogame = async (req: Request, res: Response) => {
    const docId: String = req.params.id;
    const response = await new VideogameController().delete(docId);
    return res.status(response.status).json(response);
}

export const listVideogames = async (req: Request, res: Response) => {
    const response = await new VideogameController().list();
    return res.status(200).json(response);
}


class VideogameController {

    // Create videogame
    public async create(payload: IVideogame) : Promise<IResponse>{
        const videogame = new Videogame(payload);
        return videogame.save().then(data => {
            return{
                message: "CREATED: Videogame added to database",
                status: 201,
                content: data
            }
        }).catch(err => {
            return {
                message: "Error on create Videogame",
                status: 500,
                content: err
            }
        });
    }

    // Retrieve videogame
    public async retrieve(docId: String) : Promise<IResponse> {
        return Videogame.findOne({_id:docId}).then(data => {
            if(data == null){
                return {
                    message: "Not Found: Videogame not found",
                    status: 404,
                    content: data
                };
            }
            return {
                message: "OK: Videogame retrive",
                status: 200,
                content: data
            };
        }).catch(err => {
            return {
                message: "Internal Server Error: " + err.name,
                status: 500,
                content: err
            };
        });
    }

    // Update videogame
    public async update(docId: String, payload: IVideogame): Promise<IResponse>{
        return Videogame.updateOne({_id: docId}, { $set: {
            title: payload.title,              
            description: payload.description,        
            category: payload.category,           
            effectiveDate: payload.effectiveDate,
            price: payload.price
        }}).then(data => {
            return {
                message: "OK: Videgame update",
                status: 200,
                content: data
            }
        }).catch(err => {
            return {
                message: "Internal Server Error: Videogame not updated",
                status: 500,
                content: err
            }
        });
    } 
    
    // Delete videogame
    public async delete(docId: String): Promise<IResponse> {
        return Videogame.deleteOne({_id: docId}).then(data => {
            if (data.deletedCount == 0) {
                return {
                    message: "Not Fount: Videogame not found",
                    status: 404,
                    content: data
                };
            }
            return {
                message: "OK: Videogame delete",
                status: 200,
                content: data
            }
        }).catch(err => {
            return {
                message: "Internal Server Error: " + err.name,
                status: 500,
                content: err
            }
        });
    }

    // List videogames
    public async list(): Promise<IResponse> {
        return Videogame.find({}).then(data => {
            return{
                message: "OK: All videogames retrive",
                status: 200,
                content: data
            };
        }).catch(err => {
            return {
                message: "Error on retrieve Videogames",
                status: 500,
                content: err
            }
        });
    }
}