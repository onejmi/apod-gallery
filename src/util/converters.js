
const millisInDay = 24 * 60 * 60 * 1000;

function formatApiDate(date) {
    return date.toISOString().split('T')[0];
}

export function pageToDate(pageNumber) {
    const pageTimeModifier = (pageNumber - 1) * millisInDay * 18;
    const today = new Date();
    const end = new Date(today.getTime() - millisInDay - pageTimeModifier);
    const start = new Date(today.getTime() - (millisInDay * 18) - pageTimeModifier);

    return { start: formatApiDate(start), end: formatApiDate(end) };
}