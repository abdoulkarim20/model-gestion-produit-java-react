import { useNavigate } from "react-router-dom"
import apiConnexion from "../../api/apiConnexion"
import { CategorieDTO } from "../../models/categorie/categorieDTO"

interface Props {
    categorie: CategorieDTO
}
export default function CategorieTableItem({ categorie }: Props) {
    const navigate=useNavigate();
    return (
        <>
            <tr>
                <td>{categorie.id}</td>
                <td>{categorie.libelle}</td>
                <td>{categorie.descrition}</td>
                <td>
                    <button onClick={()=>navigate(`/update-categorie/${categorie.}`)}  className="btn btn-primary mx-2">Modifier</button>
                    <button className="btn btn-danger"
                        onClick={async () => {
                            await apiConnexion.deleteCategorie(categorie.id!);
                            window.location.reload();
                        }}
                    >
                        Supprimer
                    </button>
                </td>
            </tr>
        </>
    )
}