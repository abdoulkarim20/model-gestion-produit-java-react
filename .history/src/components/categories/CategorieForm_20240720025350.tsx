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
            <form>
                <div classN="mb-3">
                    <label for="exampleInputEmail1" classN="form-label">Email address</label>
                    <input type="email" classN="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" classN="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div classN="mb-3">
                    <label for="exampleInputPassword1" classN="form-label">Password</label>
                    <input type="password" classN="form-control" id="exampleInputPassword1">
                </div>
                <div classN="mb-3 form-check">
                    <input type="checkbox" classN="form-check-input" id="exampleCheck1">
                        <label classN="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" classN="btn btn-primary">Submit</button>
            </form>
        </>
    )
}