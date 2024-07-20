import { CategorieDTO } from "../../models/categorie/categorieDTO"

interface Props {
    categorie:CategorieDTO
}
export default function CategorieTableItem({ categorie }: Props) {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{libelle}</td>
                <td>{descrition}</td>
                <td>
                    <button className="btn btn-primary mx-2">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
                </td>
            </tr>
        </>
    )
}