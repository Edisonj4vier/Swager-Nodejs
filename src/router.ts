import {Application} from 'express';
import { createVideogame, retrieveVideogame, updateVideogame, deleteVideogame, listVideogames} from './controllers/videogame.controller';

export const router = (app: Application) => {
    /**
     * @swagger
     * components:
     *  schemas:
     *    Videogame:
     *      type: object
     *      properties:
     *        id:
     *          type: string
     *          description: the auto-generated id of videogame
     *        title:
     *          type: string
     *          description: the title of videogame
     *        description:
     *          type: string
     *          description: the description of the videogame
     *        category:
     *          type: string
     *          description: the category of the videogame
     *        effectiveDate:
     *          type: string
     *          description: the effective date of the videogame
     *          format: date
     *          pattern: "yyyy-MM-dd"
     *        price:
     *          type: number
     *          description: the price of the videogame
     *      required:
     *        - title
     *        - description
     *        - category
     *        - effectiveDate
     *        - price
     *      example:
     *        id: 5e9f8f8f8f8f8f8f8f8f8f8f
     *        title: "The Witcher 3"
     *        description: "The Witcher 3 is a role-playing game developed by CD Projekt RED and published by CD Projekt RED. It is the sequel to The Witcher 2: Wild Hunt and the first game in the The Witcher series."
     *        category: "Action"
     *        effectiveDate: "2022-10-01"
     *        price: 59.99
     *    GameNotFount:
     *      type: object
     *      properties:
     *        msg:
     *          type: string    
     *          description: message for videogame not found
     *      example:
     *        msg: Videogame not found
     * 
     *  parameters:
     *    idVideoGame:
     *      in: path
     *      name: id
     *      required: true
     *      schema:
     *        type: string
     *      description: the id of the videogame
     */
    /**
     * @swagger
     * tags:
     *  name: Videogame
     *  description: Operations about videogames
     */
    /**
     * @swagger
     * /videogames:
     *  post:
     *    summary: Create
     *    tags: [Videogame]
     *    description: Create a new videogame
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/Videogame'
     *    responses:
     *      201:
     *        description: Created videogame
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/Videogame'
     *      500:
     *        description: Internal server error
     *       
     */
    app.post("/videogames", createVideogame);
    /**
     * @swagger
     * /videogames/{id}:
     *  get:
     *   summary: Retrieve
     *   tags: [Videogame]
     *   description: Retrieve one videogame
     *   parameters:
     *     - $ref: '#/components/parameters/idVideoGame'
     *   responses:
     *    200:
     *      description: Retrieved videogame
     *      content:
     *        application/json:
     *          schema:
     *            $ref: '#/components/schemas/Videogame'
     *    404:
     *      description: Videogame not found
     *    500:
     *      description: Internal server error
     */
    app.get("/videogames/:id", retrieveVideogame);
    /**
     * @swagger
     * /videogames/{id}:
     *  put:
     *   summary: Update
     *   tags: [Videogame]
     *   description: Update one videogame
     *   parameters:
     *     - $ref: '#/components/parameters/idVideoGame'
     *   requestBody:
     *     required: true
     *     content:
     *       application/json:
     *         schema:
     *           $ref: '#/components/schemas/Videogame'
     *   responses:
     *     200:
     *       description: Updated videogame
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Videogame'
     *     500:
     *       description: Internal server error
     */
    app.put("/videogames/:id", updateVideogame);
    /**
     * @swagger
     * /videogames/{id}:
     *  delete:
     *    summary: Delete
     *    tags: [Videogame]
     *    parameters:
     *      - $ref: '#/components/parameters/idVideoGame'
     *    responses:
     *      404:
     *        description: Videogame not found
     *      200:
     *        description: Deleted videogame
     *        content:
     *          application/json:
     *            schema:
     *            $ref: '#/components/schemas/Videogame'
     *      500:
     *        description: Internal server error
     *
     */
    app.delete("/videogames/:id", deleteVideogame);
    /**
     * @swagger
     * /videogames:
     *  get:
     *   summary: List
     *   tags: [Videogame]
     *   description: List all videogames
     *   responses:
     *     200:
     *       description: List of videogames
     *       content:
     *         application/json:
     *           schema:
     *             type: array
     *             items:
     *               $ref: '#/components/schemas/Videogame'
     *     
     */
    app.get("/videogames", listVideogames);

}