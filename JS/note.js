// 1) Đảo Ngược Chuỗi Trong Javascript (Reverse String)
// Reverse String

const stringReverse = str => str.split("").reverse().join("");
stringReverse('hello world'); /*dlrow olleh*/

// 2) Cuộn Trang Lên Đầu Trang (Scroll To Top Of Page)
// Scroll To Top Of Page

const scrollToTop = () => window.scrollTo(0, 0);
scrollToTop();

// 3) Xoá Sự Trùng Lặp Trong Mảng (Remove Duplicates Array)
// Remove Duplicates Array

const removeDuplicate = (arr) => [...new Set(arr)];
removeDuplicate([1, 2, 3, 4, 4, 2, 1]); // [1, 2, 3, 4]

// 4) Lấy Random Item(Phần tử ngẫu nhiên) Trong Array
// Lấy Random Item Trong Array

const randomItemArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
randomItemArray(['a', 'b', 'c', 1, 2, 3]);

// 5) Lấy Số Lớn Nhất (Max Number) Trong Array
// Max Number In Array

const maxNumber = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
maxNumber([4,9,5,7,2]) /* 9 */

const maxNum = (arr) => Math.max(...arr);
maxNum([4,9,5,7,2]);   /* 9 */

// 6) Kiểm Tra Number
// Check Number In Javascript

function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
isNumber("Hello"); /*false*/
isNumber(123);/*true*/

// 7) Kiểm Tra Null
// Check Null In Javascript

const checkNull = val => val === undefined || val === null;
checkNull(123) /* false */
checkNull() /* true */
checkNull('hello') /* false */

// 8) Lấy Min Number (Số Nhỏ Nhất) Trong Array
// Min Number Array Javascript

const minNumber = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
console.log(minNumber([3,5,9,7,1])) /*1*/

// 9) Lấy Average Number (Giá Trị Trung Bình) Trong Array
// Average Number Array Javascript

const averageNumber = arr => arr.reduce((a, b) => a + b) / arr.length;
averageNumber([1, 2, 3, 4, 5]) /* 3 */

// 10) Kiểm Tra Loại (Type) Của Phần Tử
// Check Type In Javascript

const checkType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
checkType(true) /*boolean*/
checkType("hello World") /*string*/
checkType(123) /*number*/

// 11) Đếm Sự Xuất Hiện Phần Tử Trong Array
// Count Occurences

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1,2,2,4,5,6,2], 2) /* Số 2 xuất hiện 3 lần trong array */

// 12) Lấy URL Hiện Tại Bằng Javascript
// Get Current Url

const getCurrentURL = () => window.location.href;
getCurrentURL() /* https://www.niemvuilaptrinh.com */

// 13) Viết Hoa Các Chữ Cái Trong Chuỗi
// Capitalize String

const capitalizeString = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
capitalizeString('niem vui lap trinh'); /* 'Niem Vui Lap Trinh' */

// 14) Chuyển Đổi RBG Sang Hex
// Convert RGB to Hex

 const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
 rgbToHex(52, 45, 125); /* Kết quả là: '#342d7d'*/

// 15) Chuyển Đổi Number Sang Array
// Convert Number to Array

const numberToArray = n => [...`${n}`].map(i => parseInt(i));
numberToArray(246) /*[2, 4, 6]*/
numberToArray(357911) /*[3, 5, 7, 9, 1, 1]*/

// 16) Lấy Nội Dung Từ HTML
// Cách này sẽ rất hữu ích cho việc ngăn chặn người dùng có thể nhúng các thẻ HTML vào trang web khi điền các thông tin trong form đăng nhập, đăng ký, đăng nội dung...

// Lấy Nội Dung Từ HTML

const getTextInHTML = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
getTextInHTML('<h2>Hello World</h2>'); /*'Hello World'*/

// 17) Gán Nhiều Biến Cùng Một Lúc
//  Multiple Variable Assignment

var [a,b,c,d] = [1, 2, 'Hello', false];
console.log(a,b,c,d) /* 1 2 'Hello' false */

// 18) Empty Array Trong Javascript
// Empty Array Trong Javascript

let arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr); /* Kết quả : [] */

// 19) Sao Chép (Copy) Object Trong JS
// Clone Object In Javascript

const obj = {
    name: "niem vui lap trinh",
    age: 12
};
const copyObject = { ...obj };
console.log(copyObject); /* {name: 'niem vui lap trinh', age: 12}*/ 

// 20) Kiểm Tra Số Chẵn Và Lẻ
// Check Even and Odd numbers

const isEven = num => num % 2 === 0;
console.log(isEven(1)); /*false*/
console.log(isEven(2)); /*true*/

// 21) Gộp Hai Hay Nhiều Mảng JS
// Merging multiple arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = arr1.concat(arr2);
console.log(arr); /* [1, 2, 3, 4, 5, 6] */

// 22) Sao Chép Nội Dung Vào Clipboard
// Copy text to clipboard

const copyTextToClipboard = async (text) => {
  await navigator.clipboard.writeText(text)
}

// 23) Chọn Số Ngẫu Nhiên Trong Một Khoảng Giá Trị
// Random Number In Range JS

var numRandom = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numRandom(10, 1));

// 24) Kiểm Tra Element Được Focus Hay Không
//  Kiểm Tra Element Được Focus Hay Không

const elementFocus = (el) => (el === document.activeElement);
elementIsInFocus(element);
/*Nếu true thì element đang được focus*/
/*Nếu false thì element không được focus*/

// 25) Kiểm Tra Thiết Bị Apple Bằng JS
// Check Apple Device By JS 

const isAppleDevice =
/Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
/*Nếu true thì người dùng đang sử dụng thiết bị Apple*/
/*Nếu false thì người dùng đang sử dụng thiết bị khác*/

// 26) Chuyển Đổi Chuỗi Sang Mảng
// String To Array

const str = "Hello";
const arr = [...str];
console.log(arr); /* ['H', 'e', 'l', 'l', 'o'] */