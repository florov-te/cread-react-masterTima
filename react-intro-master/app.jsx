function Hero(props){
    return(
        <div className='container'>
            <h1>{props.title}</h1>
            <p>{props.subtitle} </p>
            <img src={props.urlImage}/>
        </div>
    );
}
ReactDOM.render(<Hero title='React'
                      subtitle='что тут должно быть'
                      urlImage='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png'/>
                      
,document.getElementById('root'));