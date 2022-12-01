export const getStyle = (style: object, mark: string) => {
    let currentStyle
    for (const [key, value] of Object.entries(style)) {
        if (key === mark) {
            currentStyle = value;
        }
    }
    return currentStyle;
}