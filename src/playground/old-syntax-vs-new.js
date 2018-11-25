// thanks to the installation of babel transform plugin we can say goodbye to:
    // 1. our constructor function 
    // 2. binding functions => use arrow function instead of bind
    
class OldSyntax{
    constructor(){
        this.name = 'mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `hi my name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();

//------------------

class NewSyntax{
    name='mike';
    getGreeting = () =>{  /// using arrow function => no need to bind the function
        return `hi my name is ${this.name}`;
    }
}
const newSynatax = new newSynatax();