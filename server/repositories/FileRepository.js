class FileRepository {
    static files = [
        {
            name: 'file1.jpg',
            size: 100000,
        },
        {
            name: 'doggy.jpg',
            size: 200000,
        },
        {
            name: 'landscape.png',
            size: 5000000,
        },
        {
            name: 'imcome.jpg',
            size: 120000,
        },
        {
            name: 'Hamburg.png',
            size: 1200000,
        },
        {
            name: 'cats.png',
            size: 100000,
        },
    ];

    static getFile(fileName) {
        return this.files.find(file => file.name === fileName);
    }

    static findIndex(fileName) {
        return this.files.findIndex(file => file.name === fileName);
    }

    static getFiles() {
        return this.files;
    }

    static searchFiles(query) {
        console.log(query);
        return this.files.filter(file => file.name.indexOf(query) > -1);
    }

    static fileExists(file) {
        return (
            this.files.find(existingFile => existingFile.name === file.name) !==
            undefined
        );
    }

    static validateFile(file) {
        if (!file) {
            return false;
        }
        if (typeof file.name !== 'string') {
            return false;
        }
        if (typeof file.size !== 'number') {
            return false;
        }

        return true;
    }

    static saveFile(newFile) {
        this.files.push({
            name: newFile.name,
            size: newFile.size,
        });

        return this.files;
    }

    static deleteFile(fileName) {
        const foundFileIndex = this.findIndex(fileName);
        if (foundFileIndex > -1) {
            this.files.splice(foundFileIndex, 1);

            return this.files;
        }

        return undefined;
    }
}

module.exports = FileRepository;
