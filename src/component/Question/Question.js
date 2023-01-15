import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-cotainer'>
            <h4>1. How dose react work?</h4>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h4>2. props and state difference?</h4>
            <p>props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes.</p>
            <h4>3. What does useEffect do?</h4>
            <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
        </div>
    );
};

export default Question;