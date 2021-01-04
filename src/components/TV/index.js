import {React, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addShow} from '../../redux/shows';
import Card from '../Card';
import Container from '../Container';
import Button from '../Button';
import {Link} from "react-router-dom";
import './styles.css';

const Shows = () => {

    const state = useSelector(state => state);
    const [formField, setFormField] = useState('');
    const dispatch = useDispatch();

    return ( 
        <div className="selector-bg">

        <Container>
            <h1>TV-Shows</h1>
            <h3><Link to="/">Go Back.</Link></h3>
            <div className="tv-banner"></div>
            <form className="input-form"
            onSubmit={e => {
                e.preventDefault();
                dispatch(addShow(formField));
                setFormField('');
            }}>
                <input type="text" onChange={e => {setFormField(e.target.value)}} value={formField} placeholder="Show Title"/>
                <Button>Submit</Button>
            </form>
            <div className="grid-items">
                {state.shows.map(item => (<Card title={item} type="tv"/>))}
            </div>
        </Container>

        </div>
    );

}

export default Shows;
