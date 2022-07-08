"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Video Games API",
            version: "1.0.0",
            description: "API for Video Games",
        },
        servers: [
            {
                url: "http://localhost:3000",
            }
        ]
    },
    apis: ["./src/*.ts"]
};
