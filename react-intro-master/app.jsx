function Hero(props){
    //добавляем переменную "count"
    let count=0;
    //создаем функцию для картинки  
    function clickClack(){
       count+=1;
       console.log(count)
    }
    return(
        <div className='container'>
            <h1>{props.title}</h1>
            <p>{props.subtitle} </p>
            <img src={props.urlImage} onClick={clickClack}/> 
            <div className='count'>{count}</div>
        </div>
    );
}
ReactDOM.render(<Hero title='React'
                      subtitle='что тут должно быть'
                      urlImage='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png'/>
                      
,document.getElementById('root'));