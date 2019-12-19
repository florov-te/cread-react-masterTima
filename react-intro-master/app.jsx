
var Hero= React.createClass({
    getInitialState:function(){
        return{
            count: 0
        }
    },
    clickClack:function(){
        this.state.count+=1;
        console.log(this.state.count);
    },
    render:function(){
        return(
            <div className='container'>
                <div className='count'>{this.state.count}</div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle} </p>
                <img src={this.props.urlImage} onClick={this.clickClack}/>
            </div>
        );
    }
});
ReactDOM.render(<div>
                     <Hero title='React'
                     subtitle='что тут должно быть'
                     urlImage='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png'/>
                </div>
                      
,document.getElementById('root'));