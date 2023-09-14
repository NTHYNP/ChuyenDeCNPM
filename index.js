
function bai1(input) {
    let index = []
    let count = 0
    let arr = input.split('')
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            index.push(i + 1);
            count++
        }
    }
    if (count === 0) {
        console.log("Chuỗi " + chuoi + " là chuỗi đối xứng")
    } else {
        console.log("Cần đổi ký tự thứ " + index + " để thành chuỗi đối xứng")
        console.log("Cần đổi tối thiểu " + count + " kí tự")
    }
}

console.log("Test Bài 1: ")
bai1('abcasdesccba')



console.log("------------------------")
console.log("Test Bài 2: ")

function bai2(n, x, arr, i = 2, d = 0) {
    if(d >= x){
        console.log(i-2)
        return i-2;
    }
    d += arr[i - 2]
    i++
    return bai2(n,x,arr,i,d)
}

const n = 3
const x = 6
const l = [3,4,6]
console.log("Đáp án là: "+ bai2(n,x,l))


console.log("------------------------")
console.log('Test bài 3')


function bai3(arr){
    for(i = 0; i < arr.length -1; i++){
        for(j = i+1; j < arr.length; j ++){
            if(arr[i] === arr[j]){
                return true
            }
        }
    }
    return false
}
const arr = [3,4,5,6,7]
console.log(bai3(arr))