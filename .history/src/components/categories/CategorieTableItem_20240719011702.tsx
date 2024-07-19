import { CategorieDTO } from "../../models/categorie/categorieDTO"

interface Props {
    categorie: CategorieDTO
}
export default function CategorieTableItem({ categorie }: Props) {
    return (
        <>
            <tr className="text-center">
                <td>{categorie.id}</td>
                <td>{categorie.libelle}</td>
                <td>{categorie.descrition}</td>
                <td>
                    <button className="btn btn-primary">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
                </td>
            </tr>
        </>
    )
}