import axios from 'axios';

class FileRepository {
    static BASE_URL = 'http://localhost:3200/';

    static getList() {
        return axios({
            method: 'get',
            url: 'files',
            baseURL: this.BASE_URL,
        });
    }
}

export { FileRepository };
