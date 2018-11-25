class Counter extends React.Component{
    constructor(props){
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        }
    }

    componentDidMount(){ //loading the values
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if(!isNaN(count)){
            this.setState(()=>({count}));
            console.log('load data');
        }
    }

    componentDidUpdate(prevProps, prevState){ //saving the values
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
            console.log('save data');
        }
    }
  
    plusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        });
    }
    minusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        });

    }
    reset(){
        this.setState(() => {
            return{
                count:0
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.plusOne}>  +1    </button>
                <button onClick={this.minusOne}> -1    </button>
                <button onClick={this.reset}>    reset </button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));


// // JSX - JavaScript X ML

// const app = {
//     title:'Indecision App',
//     subtitle:'Put your life at the hands of the computer',
//     options:['One','Two']
// }

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count=0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//         <h1> Count: {count} </h1>
//         <button onClick={addOne} className="button"> +1 </button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// const appRoot = document.getElementById('app');


// renderCounterApp();