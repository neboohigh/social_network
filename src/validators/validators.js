

export const requiredField = (value) => {
    if(value) return undefined;
    return 'required field'
}
export const maxLength = (maxLength) => (value) => {
    if (maxLength < value.length) return `max length ${maxLength}`;
    return undefined
}