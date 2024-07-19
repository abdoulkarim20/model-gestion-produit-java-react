import { useEffect, useState } from "react"
import { CategorieDTO } from "../../models/categorie/categorieDTO"
import apiConnexion from "../../api/apiConnexion";

export default function CategorieTable() {
    const [categories, setCategories] = useState<CategorieDTO[]>([]);
    useEffect(() => {
        const getAllCategorie = async () => {
            const getCategories = await apiConnexion.getAllCategories
            setCategories(getCategories);
        }
        getAllCategorie();
    },[]);
    return (
        <>
        </>
    )
}