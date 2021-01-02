import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addMovie} from './redux';
import Container from './components/Container';

const App = () => {
  
  const movies = useSelector(state => state)
  const dispatch = useDispatch();
  const [formField, setFormField] = useState('');

  return (
      <Container>
        {movies}
        
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
