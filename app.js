import { User, Product } from './models';

import config from './config/config.json';

const DirWatcher = require('./module/dirwatcher');
const Events = require('events').EventEmitter;

const john = new User();
const car = new Product();
const changes = new Events();
const myWatcher = new DirWatcher(changes);

john.logToConsole();
car.logToConsole();
console.log(config.name);


console.log("hello");
myWatcher.watch('./data', changes);