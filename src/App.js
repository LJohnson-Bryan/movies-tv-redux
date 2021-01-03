import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addMovie, removeMovie} from './redux/movies';
import Container from './components/Container';
import Button from './components/Button';

const App = () => {
  
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const [formField, setFormField] = useState('');

  return (
      <Container>
        {state.movies.map(item => (
          <p>{item} <a href="#" onClick={() => {dispatch(removeMovie(item))}}>Delete</a></p>
        ))}
  
        <form onSubmit={e => {
            e.preventDefault();
            dispatch(addMovie(formField));
            setFormField('');
          }}>
          
          <input onChange={e => {setFormField(e.target.value)}} value={formField} />
          <button>Add "THE MOVIE" to the list</button>
        </form>
      </Container>
  );
}

export default App;
