import { RouteObject } from "react-router-dom";
import App from "../App";
import CategorieForm from "../components/categories/CategorieForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'create-categorie', element: <CategorieForm key='create' />
            },
            {
                path:'update-categorie/:id',element:<CategorieForm key='update'
            }
        ]
    }
]