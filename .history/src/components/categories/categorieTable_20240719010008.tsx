import { useEffect, useState } from "react"
import { CategorieDTO } from "../../models/categorie/categorieDTO"
import apiConnexion from "../../api/apiConnexion";
import CategorieTableItem from "./CategorieTableItem";

export default function CategorieTable() {

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
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Libelle</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length!==0 && (
                            categories.map((categorie,index)=>{
                                <CategorieTableItem key={in}
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}