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
                <td>{categorie.description}</td>
                <td>
                    <button className="btn btn"></button>
                </td>
            </tr>
        </>
    )
}