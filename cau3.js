// function isContain(str1, str2) {
//
// }

function isSubstring(mainString, subString) {
    for (let i = 0; i <= mainString.length - subString.length; i++) {
        let found = true;
        for (let j = 0; j < subString.length; j++) {
            if (mainString[i + j] !== subString[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

// Ví dụ sử dụng
const mainStr = "hello world";
const subStr = "world";

if (isSubstring(mainStr, subStr)) {
    console.log("Chuỗi con tồn tại trong chuỗi lớn.");
} else {
    console.log("Chuỗi con không tồn tại trong chuỗi lớn.");
}
