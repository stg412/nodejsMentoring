const parseArgs = require('minimist');
const through = require('through2');
const fs = require('fs');

const args = parseArgs(process.argv.slice(2), {
    string: ['action', 'file'],
    alias: {
        'action': 'a',
        'file': 'f',
        'help': 'h'
    },
    stopEarly: true,
    unknown: (arg) => {
        console.error('Unknown option: ', arg);
        return false
    },
});

let argsArray = [];

function parseArguments(args) {
    for (let elem in args) {
        if (elem !== null && elem.length > 1) {
            argsArray.push(elem);
            console.log('argsArray', argsArray)
        }
    }
}

parseArguments(args);

showHelp = (argsArray) => {
    console.log('showHelp');
    if (argsArray.length > 0 && argsArray[0] === "help") {
        console.log("This is help message")
    } else
    if (argsArray.length === 1) {
        console.log("Error: You need an argument");
        process.exit(-1);
    }
}

// showHelp(argsArray);

reverse = () => {
    let userInput = function write(buffer, encoding, next) {
        this.push(buffer.toString().split("").reverse().join(""));
        next();
    };
    process.stdin.pipe(through(userInput)).pipe(process.stdout);
}

transform  = () => {
    let userInput = function write(buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    };
    process.stdin.pipe(through(userInput)).pipe(process.stdout);
}

outputFile  = (filePath) => {
    fs.createReadStream(filePath.toString().substring(7)).pipe(process.stdout);
    console.log(filePath)
}

convertFromFile = () => {

}

convertToFile = () => {

}

cssBundler  = () => {

}

cmdCallFunction = () => {
    const argv = process.argv;
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === '--action=reverse') {
            reverse();
        }
        if (argv[i] === '--action=transform') {
            transform();
        }
        if (argv[i] === '--action=outputFile' && argv[i+1].toString().substring(0, 7) === '--file=') {
            outputFile(argv[i+1]);
            console.log('outputFile: something cool happened');
            // add error help message
        }
        if (argv[i] === '--action=--help') {
            showHelp();
        }
    }
}

cmdCallFunction();