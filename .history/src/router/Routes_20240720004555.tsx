import { RouteObject } from "react-router-dom";
import App from "../App";
import CategorieForm from "../components/categories/CategorieForm";
import CategorieTable from "../components/categories/CategorieTable";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'create-categorie', element: <CategorieForm key='create' />
            },
            {
                path: 'update-categorie/:id', element: <CategorieForm key='update' />
            },
            {
                path: '*', element: <CategorieTable />
            }
        ]
    }
]
ex