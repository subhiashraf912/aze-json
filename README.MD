## About

A simple node module that some people requested me to create!
Using this module you can create a database based on json files easily and manage it.
Tho I don't recommend saving data in json files, it's better if you use something like MongoDB etc.

Update #1.0.2: Creating pretty json files

## Installation

`npm i --save aze-json-db`

## Github

https://github.com/subhiashraf912/aze-json

## Example usage

Javascript:

```js
const DB = require('aze-json-db').default;
const db = new DB({
      jsonPath: 'GuildSettings.json',
      createIfDoesntExist: true,
});
db.create(query, data); //example: db.create('guildID', {prefix: "!"});
db.delete(query); //example: db.delete('guildID');
db.deleteAll(); //example: db.deleteAll();
db.find(query); //example: db.find('guildID');
db.findAll(); //example: db.findAll();
db.update(query, data); //example: db.update('guildID', {prefix: "!"});
db.has(query); //returns true/false, example: db.has(guildID);
```

Typescript:

```ts
import DB from 'aze-json-db';

const db = new DB({
      jsonPath: 'GuildSettings.json',
      createIfDoesntExist: true,
});
db.create(query, data); //example: db.create('guildID', {prefix: "!"});
db.delete(query); //example: db.delete('guildID');
db.deleteAll(); //example: db.deleteAll();
db.find(query); //example: db.find('guildID');
db.findAll(); //example: db.findAll();
db.update(query, data); //example: db.update('guildID', {prefix: "!"});
db.has(query); //returns true/false, example: db.has(guildID);
```
