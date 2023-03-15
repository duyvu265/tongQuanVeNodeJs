let arr=[2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max=arr[0];
for (const value of arr) {
    if (max<value){
        max=value;
    }

}
console.log(`so lon nhat trong day la :`+max);