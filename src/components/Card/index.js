import React from 'react';
import Button from '../Button';
import {useDispatch} from 'react-redux';
import {removeMovie} from '../../redux/movies';
import './styles.css';
import { removeShow } from '../../redux/shows';

const Card = (props) => {
    const dispatch = useDispatch();

    return ( 
        <div className="card">
            <h2>{props.title}</h2>
            <Button color="red" onClick={() => {
                dispatch(props.type === "movie" ? removeMovie(props.title) : removeShow(props.title))
            }}>Delete</Button>
        </div>
    );
}

export default Card;
