//argument object - no longer bound

const add = function (a,b){
    console.log(arguments);
    return a+b;
}

console.log(add(55,1));
console.log(add(55,1));
console.log(add(55,1));
console.log(add(55,1));
console.log(add(55,1));
console.log(add(55,1));
console.log(add(55,1));

// this key word - no longer bound


//arrow function doesnt bind its own value it goes up to the parent which is the globval scope
// unlike regular functions

const user = {
    name:'and',
    cities: ['philadelphia','newyork','dublin'],
    printPlacesLived(){
        // this.cities.forEach((city) => { using map instead of ForEach
        // using map creats a copy and not changing the original array

    // const cityMessages = this.cities.map((city) => {
    //             return this.name + ' has lived in ' + city;
    //         });
    //         return cityMessages;
    //     }
    // };
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};


        // });
    // }
// }
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
}
console.log(multiplier.multiply());
