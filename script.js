// 3. 4. 5. 10.
document.querySelector("button").addEventListener("click", function(event){
    let inputWrite = document.querySelector("input").value;
    if (inputWrite === "google") {
        alert("Yandex круче. Но это не точно");
    } else {
        // alert(inputWrite);
        setTimeout(() => alert(inputWrite), 3000);

        let objects = [];

        for(let i =0; i < 4; i++) {
            objects.push({
                'name': 'Name #' + i,
                'age': 33
            });
        }

        setTimeout(() => alert(objects.shift().name), 3000);
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

let lowest = Number.POSITIVE_INFINITY;
let highest = Number.NEGATIVE_INFINITY;
let tmp;
for (let i=crazyNumber.length-1; i>=0; i--) {
    tmp = crazyNumber[i];
    if (tmp < lowest) lowest = tmp;
    if (tmp > highest) highest = tmp;
}
console.log("Max значение: "+highest+"\nMin значение: "+ lowest);


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






