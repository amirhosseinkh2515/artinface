export default function useGetDataObject(date) {
    return {
        year: parseInt(date[0]),
        month: parseInt(date[1]),
        day: parseInt(date[2])
    }
}
