import { bytesFormatter } from '../tools/bytesFormatter';
import { useMemo } from 'react';

export default ({ children }) => {
    const formattedNumber = useMemo(() => {
        const number = parseInt(children);

        return bytesFormatter(number);
    });

    return formattedNumber;
};
