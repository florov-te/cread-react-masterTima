//5 задание 
function hero(){
    return(
        <div className='container'>
            <img src='https://facebook.github.io/react/img/logo.svg'/>
            <h1>react</h1>
        </div>
    );
}
ReactDOM.render(React.createElement(hero, null), document.getElementById('root'))
ReactDOM.render(<hero/>, document.getElementById('root'))