import React, {Component} from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Experience from './pages/Experience';
import Test from './pages/Test';
import Munchkin from './pages/Munchkin';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import GoT from './pages/GoT';
import Home from './pages/Home';
import { Helmet } from 'react-helmet';


class App extends Component{


    render(){
        return(
            <div>
                <Helmet>
                    <title>Sam Kirby</title>
                </Helmet>
                <BrowserRouter>
                <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/experience">
                            <Experience/>
                        </Route>
                        <Route exact path="/blog">
                            <Blog/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                        <Route exact path="/projects">
                            <Projects/>
                        </Route>
                        <Route exact path="/test">
                            <Test/>
                        </Route>
                        <Route exact path="/got">
                            <GoT/>
                        </Route>
                        {/* <Route exact path="/munchkin">
                            <Munchkin/>
                        </Route> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


export default App