export const setCursor = (element: HTMLInputElement, index: number) => {
    element.focus();
    element.setSelectionRange(index, index);
};
