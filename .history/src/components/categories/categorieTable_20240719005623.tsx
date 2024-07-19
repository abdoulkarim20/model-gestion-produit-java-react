import { useEffect, useState } from "react"
import { CategorieDTO } from "../../models/categorie/categorieDTO"
import apiConnexion from "../../api/apiConnexion";

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
                            <th scope="col"><Description></Description></th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}