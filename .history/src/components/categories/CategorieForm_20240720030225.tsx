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
            apiConnexion.createCategorie(categorie).then(() => navigate('/'));
        } else {
            apiConnexion.updateCategorie(categorie).then(() => navigate('/'));
        }
    }

    return (
        <>
            <div className="container">
                <div cl></div>
                <form className="form-style">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Libelle de la categorie</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description de la categorie</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary mx-2">Enregistrer</button>
                    <button type="reset" className="btn btn-secondary mx-2">Annuler</button>
                </form>
            </div>
        </>
    )
}