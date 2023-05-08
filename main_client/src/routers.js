import { ADMIN_ROUTE, HOUSE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import House from "./pages/House";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: HOUSE_ROUTE + '/:id',
        Component: House
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]