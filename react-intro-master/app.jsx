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
ReactDOM.render(<div>
                     <Hero title='React'
                     subtitle='что тут должно быть'
                     urlImage='react.png'/>
                </div>
                      
,document.getElementById('root'));