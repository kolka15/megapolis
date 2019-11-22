import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';


function App() {
    return (
        <div className='site'>
            <div className='content'>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
