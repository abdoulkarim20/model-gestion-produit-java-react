import { useEffect, useState } from "react"
import { CategorieDTO } from "../../models/categorie/categorieDTO"
import apiConnexion from "../../api/apiConnexion";
import CategorieTableItem from "./CategorieTableItem";
import { useNavigate } from "react-router-dom";

export default function CategorieTable() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategorieDTO[]>([]);
    useEffect(() => {
        const getAllCategorie = async () => {
            const getCategories = await apiConnexion.getAllCategories();
            setCategories(getCategories);
        }
        const cleanInterval=(time:number)=>{
            clearInterval(time);
        }
        return cleanInterval(2);  
        getAllCategorie();
    }, []);

    return (
        <>
            <div className="container">
                <button onClick={() => { navigate('/create-categorie') }} className="button-ajouter-style">Ajouter une categorie</button>
                {/* <button className="button-ajouter-style"><NavLink className="text-decoration-none text-white" to='/create-categorie'>Ajouter une categorie</NavLink></button> */}
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