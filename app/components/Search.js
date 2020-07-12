import { useContext, useState } from 'react';
import FilesContext from '../FilesContext';
import { FileRepository } from '../repositories/FileRepository';
import Input from './FormInput';
import Button from '../styles/Button';

export default () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { setFiles } = useContext(FilesContext);

    const updateQuery = event => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        FileRepository.serachFiles(searchQuery)
            .then(response => {
                setFiles(response.data);
            })
            .catch(response => console.warn(response));
    };

    return (
        <>
            <Input id="searchinput" onBlur={updateQuery} value={searchQuery} />
            <Button type="button" onClick={handleSearch}>
                search
            </Button>
        </>
    );
};
