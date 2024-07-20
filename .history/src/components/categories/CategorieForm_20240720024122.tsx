import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { CategorieDTO } from "../../models/categorie/categorieDTO";
import apiConnexion from "../../api/apiConnexion";

export default function CategorieForm() {
    const { id:nu } = useParams();
    const useNavige = useNavigate();

    const [categorie, setCategorie] = useState<CategorieDTO>({
        id: undefined,
        libelle: '',
        descrition: ''
    })

    useEffect(()=>{
        if(id){
            apiConnexion.updateCategorie(id).then(categorie=>setCategorie(categorie));
        }
    })
    return (
        <>
        </>
    )
}