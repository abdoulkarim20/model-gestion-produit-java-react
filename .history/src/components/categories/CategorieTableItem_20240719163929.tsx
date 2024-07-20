import { CategorieDTO } from "../../models/categorie/categorieDTO"

interface Props {
    id: number | undefined;
    libelle: string;
    descrition: string;
}
export default function CategorieTableItem({ id }: Props) {
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