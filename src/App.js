import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login'
import Messages from './components/Messages'
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";


function App() {
    const {auth} = useContext(Context)
    const [user,loading,error] = useAuthState(auth)
    if (loading){
        return <Loader />
    }

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
