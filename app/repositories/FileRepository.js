import axios from 'axios';

const API_FILES = 'http://localhost:3200/files';
const FORM_FIELD_INPUT_NAME = 'imagefile';

class FileRepository {
    static getList() {
        return axios.get(API_FILES);
    }

    static uploadFile(file) {
        const formData = new FormData();
        formData.append(FORM_FIELD_INPUT_NAME, file);

        return axios({
            method: 'post',
            url: API_FILES,
            data: formData,
            headers: {
                'content-type': 'multipart/form-data',
            },
        });
    }
}

export { FileRepository };
