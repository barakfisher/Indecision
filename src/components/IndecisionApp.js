import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption : undefined
    }
    // constructor(props){
        // super(props);
        // this.state={
        //     options:[]
        // }
        // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        // this.handlePick = this.handlePick.bind(this);
        // this.handleAddOption = this.handleAddOption.bind(this);
        // this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // }
    
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption : undefined}));
    }

    handleDeleteOptions = () =>{
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option )
    }));
}

    handlePick = () => {
        const randomPick = Math.floor(Math.random() * this.state.options.length )
        const option = this.state.options[randomPick];
        this.setState(() => ({selectedOption : option}));
    }

    // validateOption(option)

    handleAddOption = (option) =>{
        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exsists';
        }

        this.setState((prevState) => ({options :prevState.options.concat([option])}));
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


    render() {
        const subtitle = " put Your life in the hand of the copmputer ";
        return (
            <div>
                <Header subtitle={subtitle} />
            <div className='container'>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}/>
                    <div className='widget'>
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions ={this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                            />
                        <AddOption 
                            handleAddOption={this.handleAddOption}/>
                    </div>
                
            </div>
                <OptionModal
                     handleClearSelectedOption = {this.handleClearSelectedOption}
                     selectedOption = {this.state.selectedOption}/>
                </div>
        );
    }
}

export default IndecisionApp;