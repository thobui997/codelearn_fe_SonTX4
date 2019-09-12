function search(array, s) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] == s) {
            return i;
        }
    }
    return -1;
}

function main() {
    let array = ["SauLV", "NghiaTH7", "ChungNPH", "MinhPD4" ];
    let x = 'MinhPD4';
    let result = search(array, x);
    if (result == -1) {
        console.log('Element is not present in array.');
    } else {
        console.log('Element is present at index ' + result);
    }
}
main();