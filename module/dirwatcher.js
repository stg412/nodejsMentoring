import * as fs from 'fs';

class DirWatcher {
    constructor(changes) {
        this.changes = changes;
    }

    watch(path, delay) {
        console.log("Hello DirWatcher module");
        fs.readdir(path, (err, files) => {
            files.forEach(file => {
                const fileName = path + '/' + file;
                fs.watchFile(
                    fileName,
                    {persistent: true, interval: delay},
                    (curr, prev) => {
                        if (curr.mtime !== prev.mtime) {
                            this.changes.emit('changed', fileName);
                            console.log('fileName: ', fileName);
                        }
                })
            })
        })
    }
}

module.exports = DirWatcher;