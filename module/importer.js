const fs = require('fs');
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
            console.log('path: ', path);
            resolve(this.convertCsv(path))
        })
    }

    importSync(path) {
        return this.convertCsv(
            fs.readFileSync(path, 'utf8')
        );
    }

    subscribe() {
        this.changes.on('changed', (fileName) => {
            console.log(`subscribe fileName: ${fileName}`);
            const fileData = this.import(fileName);
        })
    }


}

module.exports = Importer;