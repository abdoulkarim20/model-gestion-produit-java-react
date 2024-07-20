import { ChangeEvent, useEffect, useState } from "react";
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
    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setCategorie({...categorie,[va]})
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 card py-2">
                        <h4 className="text-center my-2">Enregistrer une categorie</h4>
                        <form className="form-style">
                            <div className="mb-3">
                                <label htmlFor="libelle" className="form-label">Libelle de la categorie</label>
                                <input type="text" name='libelle' value={categorie.libelle} className="form-control" id="libelle" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description de la categorie</label>
                                <input type="text" name="descrition" value={categorie.descrition} className="form-control" id="description" />
                            </div>
                            <button type="submit" className="btn btn-primary">Enregistrer</button>
                            <button type="reset" onClick={() => navigate('/')} className="btn btn-secondary mx-2">Annuler</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}