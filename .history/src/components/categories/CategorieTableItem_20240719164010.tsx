import { CategorieDTO } from "../../models/categorie/categorieDTO"

interface Props {
    id: number | undefined;
    libelle: string;
    descrition: string;
}
export default function CategorieTableItem({ id,libelle,descrition }: Props) {
    return (
        <>
            <tr className="text-center">
                <td>{id}</td>
                <td>{libelle}</td>
                <td>{descrition}</td>
                <td>
                    <button className="btn btn-primary">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
                </td>
            </tr>
        </>
    )
}