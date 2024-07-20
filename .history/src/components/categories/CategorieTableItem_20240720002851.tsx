import { CategorieDTO } from "../../models/categorie/categorieDTO"

interface Props {
    categorie: CategorieDTO
}
export default function CategorieTableItem({ categorie }: Props) {
    return (
        <>
            <tr>
                <td>{categorie.id}</td>
                <td>{categorie.libelle}</td>
                <td>{categorie.descrition}</td>
                <td>
                    <button className="btn btn-primary mx-2">Modifier</button>
                    <button className="btn btn-danger"
                    onClick={} >
                        Supprimer
                    </button>
                </td>
            </tr>
        </>
    )
}