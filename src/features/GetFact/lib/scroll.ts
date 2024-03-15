export const scrollToStart = (element: HTMLInputElement) => {
    if (element.scrollWidth > element.clientWidth) {
        element.scrollLeft = 0;
    }
}