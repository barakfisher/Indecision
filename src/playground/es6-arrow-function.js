//  es5
const square = function (x){
    return x*x;
};
// es 6
// const squareArrow = (x) => {
//     return x*x;
// }

const squareArrow = (x) => x*x;

console.log(squareArrow(3));
console.log(squareArrow(4));

const getFirstName = (fullName) =>{
    return fullName.split(" ")[0];
};