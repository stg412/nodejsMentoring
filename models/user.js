export class User {
    constructor(name) {
        this.name = name;
    }

    logToConsole() {
        console.log('user module: ' + this.name)
    }
}