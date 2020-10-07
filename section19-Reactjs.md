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

211:
```
const Card = (props) => {
    return (
        <h1>RoboFriends</h1>
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/*⬆️are tachyon's built-in css type. background-light green dib-boarder  'pa3'-padding of three ma2-magin of 2 'grow'-animation shadow-5: add shadows to it*/}
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        );
}

ReactDOM.render(
    <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>,
    document.getElementById('root')
    )
```

212: use <React.Fragment> for SEMANTIC HTML

https://blog.logrocket.com/rendering-sibling-elements-react-fragments/

