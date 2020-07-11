class FileRepository {
    static files = [
        {
            name: 'file1.jpg',
            size: 100000,
            src: 'https://picsum.photos/seed/file1.jpg/100/100',
        },
        {
            name: 'doggy.jpg',
            size: 200000,
            src: 'https://picsum.photos/seed/doggy.jpg/100/100',
        },
        {
            name: 'landscape.png',
            size: 5000000,
            src: 'https://picsum.photos/seed/landscape.png/100/100',
        },
        {
            name: 'imcome.jpg',
            size: 120000,
            src: 'https://picsum.photos/seed/imcome.jpg/100/100',
        },
        {
            name: 'Hamburg.png',
            size: 1200000,
            src: 'https://picsum.photos/seed/Zürich.png/100/100',
        },
        {
            name: 'cats.png',
            size: 100000,
            src: 'https://picsum.photos/seed/cats.png/100/100',
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

    static saveFile(newFile) {
        const randomSeed = Math.floor(Math.random() * 10);
        this.files.push({
            name: newFile.name,
            size: newFile.size,
            src: `https://picsum.photos/seed/${randomSeed}/100/100`,
        });

        return this.files;
    }

    static deleteFile(fileName) {
        const foundFileIndex = this.findIndex(fileName);
        if (foundFile) {
            this.files.splice(foundFileIndex, 1);

            return true;
        }

        return false;
    }
}

module.exports = FileRepository;
