var ImageCounter=function(props){
    return(
        <div className='image-counter' >
          <div className='count'>{props.count}</div>
          <img src={'img/'+props.urlImage} onClick={props.onCount}/>
        </div>
        )
}
var Hero= React.createClass({
    getInitialState:function(){
        return{
            count: 0
        }
    },
    clickClack:function(){
       this.setState({count:this.state.count + 1}) ;
        console.log(this.state.count);
    },
    render:function(){
        return(
            <div className='container'>
                <ImageCounter urlImage={this.props.urlImage} count={this.state.count} onCount={this.clickClack}/>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle} </p>
                
            </div>
        );
    }
});
var App=React.createClass({
    render:function(){
        return(
                <div>
                    {this.props.heroues.map(function(hero){
                    return <Hero key={hero.id} title={hero.title}
                    subtitle={hero.subtitle}
                    urlImage={hero.urlImage}/>;
                    })}  
                </div>
        );
    }
});
var data=[
    {
        id:1,
        title:'React',
        subtitle:'что тут должно быть',
        urlImage:'react.png'
    },
    {
        id:2,
        title:'Novoe',
        subtitle:'я закончил все задания ',
        urlImage:'angular.png'
    }
];
ReactDOM.render(<App heroues={data}/>,document.getElementById('root'));