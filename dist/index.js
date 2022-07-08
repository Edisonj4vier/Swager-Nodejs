"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const database_1 = require("./database");
const router_1 = require("./router");
// Swagger documentation
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.connectToMongodb)();
    const server = (0, express_1.default)();
    const specs = (0, swagger_jsdoc_1.default)(swagger_1.options);
    server.use(express_1.default.json());
    server.use('/games', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    (0, router_1.router)(server);
    //Start server
    server.listen(config_1.PORT, () => {
        console.log("The application is listening on port " + config_1.PORT);
    });
});
main();
