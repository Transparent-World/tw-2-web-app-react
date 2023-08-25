import Admin from "./pages/Admin/Admin"
import MainPage from "./pages/MainPage/MainPage"
import OrderPage from "./pages/OrderPage/OrderPage"
import MapPage from "./pages/MapPage/MapPage"
import { ORDER_ROUTE } from "./utils/consts.js"
import { MAPPAGE_ROUTE } from "./utils/consts.js"
import { MAINPAGE_ROUTE } from "./utils/consts.js"
import { ADMIN_ROUTE } from "./utils/consts.js"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    }
]

export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Component: MainPage,
    },
    {
        path: MAPPAGE_ROUTE,
        Component: MapPage,
    },
    {
        path: ORDER_ROUTE,
        Component: OrderPage,
    }
]