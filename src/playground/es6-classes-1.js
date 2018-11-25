class Person {
    constructor(name = "Anonymous", age=0 ){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} YO`
    }

}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        // return !!this.major; same as
        return this.major ? true : false;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` major in ${this.major}`
        }
        return description;
    }

}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` im visitin from ${this.homeLocation}`
        }
        return greeting;
   }
}

const me = new Student('Barak Fisher',1, 'React');
const he = new Student();
const she = new Traveler('gen', 33, 'sw');
console.log(me);
console.log(me.getDescription());
console.log(he);
console.log(he.getDescription());
console.log(she);
console.log(she.getGreeting());

