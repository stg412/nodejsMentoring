import { User, Product } from './models';

import config from './config/config.json';

const DirWatcher = require('./module/dirwatcher');
const Importer = require('./module/importer');
const EventEmitter = require('events').EventEmitter;

const john = new User('john');
const car = new Product();
const changes = new EventEmitter();
const myWatcher = new DirWatcher(changes);
const myImporter = new Importer(changes);

john.logToConsole();
car.logToConsole();
console.log(config.name);


console.log("hello");
myWatcher.watch('./data', changes);
// myImporter.convertCsv('./data/data2.csv');
myImporter.subscribe();