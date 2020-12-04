import Home from '../views/home';
import ProductDetail from '../views/product-detail';
import Login from '../views/login';
import Register from '../views/register';
import Auth from "../hoc/Auth";

const appRoutes = [
    {
        path: "/",
        title: "Home",
        component: Auth(Home)
    },
    {
        path: "/products/:id",
        title: "Product view",
        component: Auth(ProductDetail)
    },
    {
        path: "/login",
        title: "Login",
        component: Login
    },
    {
        path: "/register",
        title: "Register",
        component: Register
    },
    {
        redirect: true,
        path: "*",
        to: "/",
        component: Auth(Home)
    }
];

export default appRoutes
