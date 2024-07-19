import { CategorieDTO } from "../../models/categorie/categorieDTO"

interface Props {
    categorie: CategorieDTO
}
export default function CategorieTableItem({ categorie }: Props) {
    return (
        <>
            <tr tex>
                <td>{categorie.id}</td>
                <td>{categorie.libelle}</td>
                <td>{categorie.description}</td>
            </tr>
        </>
    )
}