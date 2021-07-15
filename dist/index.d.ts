declare type optionsType = {
    jsonPath: `${string}.json`;
    createIfDoesntExist?: boolean;
};
export default class JsonDB {
    jsonPath: `${string}.json`;
    constructor(options: optionsType);
    find(query: string): any;
    findAll(): any;
    update(indexQuery: string, newData: any): any;
    create(indexQuery: string, newData: any): any;
    delete(indexQuery: string): any;
    deleteAll(): any;
    has(query: string): false | undefined;
}
export {};
