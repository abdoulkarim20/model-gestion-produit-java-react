import { RouteObject } from "react-router-dom";
import App from "../App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'create-categorie',element:
            }
        ]
    }
]