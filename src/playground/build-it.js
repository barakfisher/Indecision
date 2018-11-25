class Visability extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisability = this.toggleVisability.bind(this);
        this.state = {
            visability : false
        }
    }
    
    toggleVisability(){
        this.setState((prevState) => {
            return {
                visability : !prevState.visability
            }; 
        });
    }

    render(){
        return(
            <div>
            <h1>hello</h1>
                <button onClick={this.toggleVisability}>
                    {this.state.visability ? "hide detailes" : "show details" }
                </button>
                {this.state.visability ? <p>asdasdasd</p> : undefined}
            </div>
        )
    }
}
ReactDOM.render(<Visability />, document.getElementById('app'));


