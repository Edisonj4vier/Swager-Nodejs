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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listVideogames = exports.deleteVideogame = exports.updateVideogame = exports.retrieveVideogame = exports.createVideogame = void 0;
const videogame_model_1 = require("../models/videogame.model");
const createVideogame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, category, effectiveDate, price } = req.body;
    const response = yield new VideogameController().create({ title, description, category, effectiveDate, price });
    return res.status(response.status).json(response);
});
exports.createVideogame = createVideogame;
const retrieveVideogame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new VideogameController().retrieve(docId);
    return res.status(response.status).json(response);
});
exports.retrieveVideogame = retrieveVideogame;
const updateVideogame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, category, effectiveDate, price } = req.body;
    const docId = req.params.id;
    const response = yield new VideogameController().update(docId, { title, description, category, effectiveDate, price });
    return res.status(response.status).json(response);
});
exports.updateVideogame = updateVideogame;
const deleteVideogame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new VideogameController().delete(docId);
    return res.status(response.status).json(response);
});
exports.deleteVideogame = deleteVideogame;
const listVideogames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield new VideogameController().list();
    return res.status(200).json(response);
});
exports.listVideogames = listVideogames;
class VideogameController {
    // Create videogame
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const videogame = new videogame_model_1.Videogame(payload);
            return videogame.save().then(data => {
                return {
                    message: "CREATED: Videogame added to database",
                    status: 201,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "Error on create Videogame",
                    status: 500,
                    content: err
                };
            });
        });
    }
    // Retrieve videogame
    retrieve(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return videogame_model_1.Videogame.findOne({ _id: docId }).then(data => {
                if (data == null) {
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
        });
    }
    // Update videogame
    update(docId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return videogame_model_1.Videogame.updateOne({ _id: docId }, { $set: {
                    title: payload.title,
                    description: payload.description,
                    category: payload.category,
                    effectiveDate: payload.effectiveDate,
                    price: payload.price
                } }).then(data => {
                return {
                    message: "OK: Videgame update",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "Internal Server Error: Videogame not updated",
                    status: 500,
                    content: err
                };
            });
        });
    }
    // Delete videogame
    delete(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return videogame_model_1.Videogame.deleteOne({ _id: docId }).then(data => {
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
                };
            }).catch(err => {
                return {
                    message: "Internal Server Error: " + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    // List videogames
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return videogame_model_1.Videogame.find({}).then(data => {
                return {
                    message: "OK: All videogames retrive",
                    status: 200,
                    content: data
                };
            }).catch(err => {
                return {
                    message: "Error on retrieve Videogames",
                    status: 500,
                    content: err
                };
            });
        });
    }
}
