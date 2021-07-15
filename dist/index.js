"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const emptyObject = {};
const readJsonFile = (path) => {
    return JSON.parse(fs_1.default.readFileSync(path, 'utf-8'));
};
class JsonDB {
    constructor(options) {
        if (!options)
            throw new Error('The class options are required!');
        if (!options.jsonPath)
            throw new Error('Json path is required!');
        this.jsonPath = options.jsonPath;
        try {
            JSON.parse(fs_1.default.readFileSync(this.jsonPath, 'utf8'));
        }
        catch (err) {
            if (options.createIfDoesntExist) {
                console.log(`${this.jsonPath} file wasn't found, creating one...`);
                fs_1.default.writeFileSync(this.jsonPath, JSON.stringify({}), {
                    encoding: 'utf-8',
                });
            }
            else
                throw new Error("Selected Json file wasn't found!");
        }
    }
    find(query) {
        const db = readJsonFile(this.jsonPath);
        return db[query];
    }
    findAll() {
        const db = readJsonFile(this.jsonPath);
        return db;
    }
    update(indexQuery, newData) {
        const db = readJsonFile(this.jsonPath);
        if (!db[indexQuery])
            return console.error(`Couldn't find the index query:\n${indexQuery}\nin the database to update it!`);
        db[indexQuery] = newData;
        try {
            fs_1.default.writeFileSync(this.jsonPath, JSON.stringify(db));
            return readJsonFile(this.jsonPath);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    create(indexQuery, newData) {
        const db = readJsonFile(this.jsonPath);
        if (db[indexQuery])
            return console.error(`The index query ${indexQuery} already exists in the database!`);
        db[indexQuery] = newData;
        try {
            fs_1.default.writeFileSync(this.jsonPath, JSON.stringify(db));
            return readJsonFile(this.jsonPath);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    delete(indexQuery) {
        const db = readJsonFile(this.jsonPath);
        if (!db[indexQuery])
            return console.error(`Couldn't find the index query:\n${indexQuery}\nin the database to delete it!`);
        try {
            delete db[indexQuery];
            fs_1.default.writeFileSync(this.jsonPath, JSON.stringify(db));
            return readJsonFile(this.jsonPath);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    deleteAll() {
        try {
            fs_1.default.writeFileSync(this.jsonPath, JSON.stringify(emptyObject));
            return readJsonFile(this.jsonPath);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    has(query) {
        const db = readJsonFile(this.jsonPath);
        if (!db[query])
            return false;
        else
            true;
    }
}
exports.default = JsonDB;
