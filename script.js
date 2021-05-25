// 3. 4. 5. 10.
document.querySelector("button").addEventListener("click", function(event){
    let inputWrite = document.querySelector("input").value;
    if (inputWrite === "google") {
        alert("Yandex круче. Но это не точно");
    } else {
        // alert(inputWrite);
        setTimeout(() => alert(inputWrite), 3000);

        let arr = [ 'user1', { name: 'John', age: '25' }, 'user2', { name: 'Tom', age: '21' } , 'user3', { name: 'Samanta', age: '19' }   ];
        // alert(arr[1].name);
        setTimeout(() => alert(arr[1].name), 3000);
    }

});


// 6.
let sum = superSum(8, 3);
function superSum(a, b) {
    return a * b;
}
// alert(sum);
console.log(sum);


// 7.
let crazyNumber = [45,56,75,97,24,345,12,121,32,86];
Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

console.log("Max значение: "+crazyNumber.max()+"\nMin значение: "+ crazyNumber.min());


// 8.
let a = "cat";
let b = "dog";

[a, b] = [b, a];

console.log(a);
console.log(b);


// 9.
// let crazyNumber2 = [432,56,567,97,24,345,12,116,32,67];
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
// console.log(crazyNumber2.max());

