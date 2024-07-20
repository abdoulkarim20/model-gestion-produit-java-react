import { useEffect, useState } from "react"
import { CategorieDTO } from "../../models/categorie/categorieDTO"
import apiConnexion from "../../api/apiConnexion";
import CategorieTableItem from "./CategorieTableItem";
import { NavLink, useNavigate } from "react-router-dom";

export default function CategorieTable() {

    const navigate=useNavigate();

    const [categories, setCategories] = useState<CategorieDTO[]>([]);
    useEffect(() => {
        const getAllCategorie = async () => {
            const getCategories = await apiConnexion.getAllCategories();
            setCategories(getCategories);
        }
        getAllCategorie();
    }, []);

    return (
        <>
            <div className="container-style">
                <button onClick={()} className="button-ajouter-style">Ajouter une categorie</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Libelle</th>
                            <th scope="col">Description</th>
                            <th colSpan={2} scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length !== 0 && (
                            categories.map((categorie, index) => (
                                <CategorieTableItem key={index} categorie={categorie} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}