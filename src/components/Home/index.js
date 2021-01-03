import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <div className="selector-bg">
                <Link to="/movies"><div className="selector-item movies-bg">Movies</div></Link>
                <Link to="/tv"><div className="selector-item tv-bg">TV-Shows</div></Link>
            </div>
        </div> 
    );
}

export default Home;
