var image=React.createElement('img',{src:'https://png.cmtt.space/paper-media/6e/eb/6a/62fab81b990d7e.jpg'});//путь до картинки 
var title=React.createElement('h1',null,'привет реакт')//добавляем заголовок 
var subtitle=React.createElement('p',null,'что-то тут лежит')//добавляем текс под ним 
var container =React.createElement('div',{className:'container'},image,title,subtitle);//"контейнер" куда мы складываем все наши элементы 
/*function Hero(props) {
    return (
        React.createElement('div', { className: 'container' }, 
            React.createElement('img', { src: props.imageUrl }),
            React.createElement('h1', null, props.title),
            React.createElement('p', null, props.subtitle)
        )
    );
}

var hero = React.createElement(Hero, { title: 'React',
                                       subtitle: 'Библиотека для создания пользовательских интерфейсов',
                                       imageUrl: 'https://facebook.github.io/react/img/logo.svg' });
*/
ReactDOM.render(container, document.getElementById('root'));//передаем значение по id