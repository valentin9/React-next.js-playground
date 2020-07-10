import { useState } from 'react';

const Upload = props => {
    const [file, setFile] = useState('');

    const handleChangeFile = event => {
        setFile(event.target.files);
    };

    return (
        <div>
            <h2>Upload a file</h2>
            <label>
                file
                <input type="file" value={file} onChange={handleChangeFile} />
            </label>
        </div>
    );
};

export default Upload;
