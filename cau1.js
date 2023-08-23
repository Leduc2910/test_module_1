// khai báo hàm bao gồm cả tham số

function searchThirdMax(arr) {
    let max1 = arr[0];
    let max2;
    let max3;
    for (let i = 0; i < arr.length; i++) {
        if (max1 < arr[i]) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }
        if (max2 < arr[i] && arr[i] !== max1 ) {
            max3 = max2;
            max2 = arr[i];
        }
        if (max3 < arr[i] && arr[i] !== max1 && arr[i] !== max2) {
            max3 = arr[i];
        }
    }

        return max3;

}

console.log(searchThirdMax([8, 5, 694, 222, 2222,2222,694]));

