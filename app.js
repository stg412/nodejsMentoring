import { User, Product } from './models';
import config from './config/config.json';


let john =  new User();
let car =  new Product();

john.logToConsole();
car.logToConsole();
console.log(config.name);

(function() {
    console.log("hello")
})()

