import * as fs from 'fs';
const csv = require('csvtojson');

class Importer {
    constructor(changes) {
        this.changes = changes;
    }

    convertCsv(csvData) {
        csv()
            .fromFile(csvData)
            .on('json', (jsonObj) => {
                console.log('jsonObj: ', jsonObj);
            })
            .on('done', (error) => {
                console.log('end')
            })
    }

    import (path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) throw reject(err);
                resolve(this.convertCsv(data))
            })
        })
    }

    importSync(path) {
        return this.convertCsv(
            fs.readFileSync(path, 'utf8')
        );
    }

    subscribe() {
        this.changes.on('changed', (fileName) => {
            console.log(`the file ${fileName} was changed`);
            const fileData = this.import(fileName);
            fileData.then((result) => {
                console.log('subscribe ' + fileName + ' : ' + result);}
            );
        })
    }


}

module.exports = Importer;