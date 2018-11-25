console.log('App.js is running!');

const app = {
    title:'Indecision App',
    subtitle:'Put your life at the hands of the computer',
    options:[]
}

const onFormSubmit = (e) =>{
    e.preventDefault(); // preventing page from reload and rerender
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
}
const removeAll = () =>{
    app.options=[];
    render();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() *  app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () =>{
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p> {app.subtitle} </p>}
            <p>{app.options.length >0 ?  'here are your options:'  : 'no options for zi'} </p>
            <button disabled={app.options.length === 0} onClick={makeDecision}> What Should I Do </button>
            <button onClick={removeAll} >Remove All</button>

        
            <ol>
               {
                   app.options.map((option) =><li key = {option} > {option} </li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button > Add Option </button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();