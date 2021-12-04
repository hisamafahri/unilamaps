export function getCurrentDate() {
    const today = new Date();
    const index = today.getDay();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();
    if (index == 0) {
        return({ text: 'Minggu', day, month, year });
    } else if (index == 1) {
        return({ text: 'Senin', day, month, year });
    } else if (index == 2) {
        return({ text: 'Selasa', day, month, year });
    } else if (index == 3) {
        return({ text: 'Rabu', day, month, year });
    } else if (index == 4) {
        return({ text: 'Kamis', day, month, year });
    } else if (index == 5) {
        return({ text: 'Jumat', day, month, year });
    } else if (index == 6) {
        return({ text: 'Sabtu', day, month, year });
    } else {
        return('Date is undefined!');
    }

}