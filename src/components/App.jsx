import React, { useState } from 'react';
import CustomMap from './CustomMap';
import Bandeau from './Bandeau';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return <h1>Bienvenue</h1>;
}

function MyMap() {
    const [nbclick, setNbClick] = useState(0);
    return(
        <div>
            <Bandeau nb={nbclick}/>
            <CustomMap onEventMap={(nbclick) => setNbClick(nbclick)}/>
        </div>
    )
}

const App = () => {

    return(
        <div>
        <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/mymap">Map</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/mymap">
                        <MyMap />
                    </Route>
                    <Redirect from='/' to='/home' />
                </Switch>
        </Router>
        </div>
    );
}

export default App;