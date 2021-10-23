import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login'
import Messages from './components/Messages'


function App() {
    const user = false
    return (
        <BrowserRouter>
            <NavBar />
            {user
                ? (
                    <Switch>
                        <Route path = '/messages' component={Messages}></Route>
                        <Redirect to='/messages' />
                    </Switch>
                )
                : (
                    <Switch>
                        <Route path = '/login' component={Login}></Route>
                        <Redirect to='/login' />
                    </Switch>
                )
            }
        </BrowserRouter>
    );
}

export default App;
