import express from "express";
import { PORT} from "./config";
import { connectToMongodb } from "./database";
import { router } from "./router";

// Swagger documentation
import swaggerJSDoc from "swagger-jsdoc"; 
import SwaggerUI from "swagger-ui-express";
import {options} from './swagger';

const main = async () => {
    await connectToMongodb();
    const server = express();
    const specs = swaggerJSDoc(options);
    const cors = require('cors');
    const whiteList = ['http://localhost:4200'];
    server.use(express.json());
    server.use(cors({origin: whiteList}));
    server.use('/games',SwaggerUI.serve,SwaggerUI.setup(specs));
    router(server);
    
    //Start server
    server.listen(PORT, () => {
        console.log("The application is listening on port " + PORT)
    });
}


main();