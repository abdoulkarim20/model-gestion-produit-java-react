import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { CategorieDTO } from "../../models/categorie/categorieDTO";
import apiConnexion from "../../api/apiConnexion";

export default function CategorieForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [categorie, setCategorie] = useState<CategorieDTO>({
        id: undefined,
        libelle: '',
        descrition: ''
    })

    useEffect(() => {
        if (id) {
            apiConnexion.getCategorieDetail(id).then(categorie => setCategorie(categorie!));
        }
    }, [id]);

    function handleSubmit() {
        if (!categorie.id) {
            apiConnexion.createCategorie(categorie).then(() => navigate('/'))
        }else{
            apiConnexion.updateCategorie()
        }
    }

    return (
        <>
        </>
    )
}