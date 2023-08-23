function tryRemoveFromArray(array, index) {
    if (index >= 0 && index <= array.length - 1) {
        for (let i = index; i < array.length; i++) {
            array[i] = array[i + 1];
        }
        array.length--;
    } else {
        return array;
    }
    return array;
}

console.log(tryRemoveFromArray([3, 4, 5, 6,7,8,9],3));