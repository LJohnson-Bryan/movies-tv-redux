import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addMovie} from '../../redux/movies';
import Card from '../Card';
import Container from '../Container';
import Button from '../Button';
import {Link} from "react-router-dom";
import './styles.css';

const Movies = () => {

    const state = useSelector(state => state);
    const [formField, setFormField] = useState('');
    const dispatch = useDispatch();

    return ( 
        <div className="selector-bg">

        <Container>
            <h1>Movies</h1>
            <h3><Link to="/">Go Back.</Link></h3>
            <div className="movies-banner"></div>
            <form className="input-form"
            onSubmit={e => {
                e.preventDefault();
                dispatch(addMovie(formField));
                setFormField('');
            }}>
                <input type="text" onChange={e => {setFormField(e.target.value)}} value={formField} placeholder="Movie Title"/>
                <Button>Submit</Button>
            </form>
            <div className="grid-items">
                {state.movies.map(item => (<Card title={item} />))}
            </div>
        </Container>

        </div>
    );

}

export default Movies;
