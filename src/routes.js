import MainPage from "./pages/MainPage/MainPage"
import { MAINPAGE_ROUTE } from "./utils/constants.js"

export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Component: MainPage,
    }
]