import Login from "../components/Login";
import Messages from "../components/Messages";


export const publicRoutes = [
    {
        path : '/login',
        component : Login
    }
]
export const privateRoutes = [
    {
        path : '/messages',
        component : Messages
    }
]