import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { CategorieDTO } from "../../models/categorie/categorieDTO";

export default function CategorieForm() {
    const { id } = useParams();
    const useNavige = useNavigate();

    const [categorie,setCategorie]=useState<CategorieDTO>({
        id:undefined,
        libelle:''
    })
    return (
        <>
        </>
    )
}