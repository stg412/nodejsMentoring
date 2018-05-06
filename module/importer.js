import * as fs from 'fs';
const csv = require('csvtojson');

class Importer {
    constructor(changes) {
        this.changes = changes;
    }

    import (path) {

    }

    importSync(path) {

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
}

module.exports = Importer;