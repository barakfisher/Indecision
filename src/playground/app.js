
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            options:[]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount(){ //when the component rendered
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){
                this.setState(() => ({options: options})
                );
            }
        } catch (e) {

        }
    } 
    componentDidUpdate(prevProp, prevState){//afeter state or props value changed
        if( prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    
    }
    componentWillUnmount(){//when the component is going away
        console.log("will unmount");
    }

    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option )
    }));
}

    handlePick(){
        const randomPick = Math.floor(Math.random() * this.state.options.length )
        alert(this.state.options[randomPick]);
    }

    // validateOption(option)

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exsists';
        }

        this.setState((prevState) => ({options :prevState.options.concat([option])}));
        }
    


    render() {
        const subtitle = " put Your life in the hand of the copmputer ";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions ={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                    />
                <AddOption 
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1> {props.title}</h1>
            {props.subtitle && <h2> {props.subtitle}</h2>}
        </div>
    );
};
Header.defaultProps = {
    title : 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should i do? 
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All </button>
            {props.options.length === 0 && <p>Please enter an option to get started</p>}
            {props.options.map((option) => (
                <Option 
                    key={option}
                    optionText={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                    />
                            
            ))}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
            onClick = { () => {
                props.handleDeleteOption(props.optionText);
            }}>
            
            Remove </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error : undefined
        };
        this.handleAddOption = this.handleAddOption.bind(this);

    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error }));
        // return {  error };   } ); same as the above
        if (!error){
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Your option"/>
                    <button type="submit" > Add Option </button>
                </form>
                
            </div>
        );
    }
}


// const User = (props) =>{
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));