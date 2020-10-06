This is my learning notes for the section 19: https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/16538182#announcements

```
Notes for 203-205: 
React: 所有涉及view的都可以用， use web as components 
atomicdesign.bradfrost.com  所有的东西都是一个component  
download react directly(老师展示了很多login, navigation bar之类的component)
dom? react board will create virtual dom(paint the way in the optimal way)
option1:
npm install -g create-react-app 
create-react-app robofriends
.ico icon
src/index.js main element 
public/index.html
```

206: learn to update package through package.json

207: npx create-react-app myapp

208: Class vs Functional App.js

```
function App{
    return()
}

class App extends React.Component{
    render(){
        return  ()
}
}
```

209:ReactDOM - to be compatible with various websites

210:
```
<div className='f1 tc'> 
ReactDOM.render(<Hello greeting={'Hello' + 'React Ninja'}/>, document.getElementById('root'));
In Hello.js <p> {this.props.greeting}</p>
```