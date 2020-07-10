const SIZE_LABELS = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
const ZERO_BYTES = '0 Byte';

function bytesFormatter(bytes) {
    const bytesNumber = Number(bytes);
    if (!bytesNumber || bytes == 0) {
        return ZERO_BYTES;
    }
    
    const i = parseInt(Math.floor(Math.log(bytesNumber) / Math.log(1024)));
    const sizeNumber = Math.round(bytesNumber / Math.pow(1024, i), 2);
    const sizeLabel = SIZE_LABELS[i];

    return `${sizeNumber} ${sizeLabel}`;
}

export { bytesFormatter };
