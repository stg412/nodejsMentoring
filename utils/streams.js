const parseArgs = require('minimist');

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
            console.log(elem)
        }
    }
}

parseArguments(args);

showHelp = (argsArray) => {
    console.log('showHelp');
    if (argsArray.length > 0 && argsArray[0] === "help") {
        console.log("This is help message")
    } else
    if (argsArray.length === 0) {
        console.log("You need an argument");
        process.exit(-1);
    }
}

showHelp(argsArray);

cmdCallFunction = () => {
    const argv = process.argv;
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === '--action=outputFile' && argv[i+1] === '--file=dataFile.csv') {
            // some logic we need

            showHelp(argv[i+1]);
            console.log('outputFile: ');
        }
        if (argv[i] === '--action=--help') {
            showHelp();
        }
    }
}

cmdCallFunction();