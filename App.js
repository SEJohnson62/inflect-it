import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [ wordGroups, setWordGroup ] = useState([]);

  const onSubmit = (ev)=> {
    ev.preventDefault();
    const words = {word: '', singular: '', plural: ''};
    words.word = text;

    var inflection = require( 'inflection' );
    words.singular = inflection.singularize( words.word );
    words.plural = inflection.pluralize( words.word );

    setWordGroup([...wordGroups, words]);
    setText('');
  }

  return (
    <div>
      <form onSubmit={ onSubmit }>
        <input value={ text } onChange={ ev => setText(ev.target.value) }/>
        <button disabled={ !text }>Get Inflections</button>
      </form>
      <div>
          <ul>
            {
              wordGroups.map((wordGroup, idx)=>{
                return(
                <li key = {idx} >
                  <p>{wordGroup.word }</p>
                  <p>Singular: {wordGroup.singular}</p>   <p>Plural: {wordGroup.plural}</p>
                </li>
                )
              })
            }
            </ul>
          </div>
    </div>
  );
}

export default App;
