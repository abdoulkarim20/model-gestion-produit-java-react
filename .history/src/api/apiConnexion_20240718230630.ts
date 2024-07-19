import axios, { AxiosResponse } from "axios";
import { CategorieDTO } from "../models/categorie/categorieDTO";
import { ListeCategorie } from "../models/categorie/getListeCategorieResponse";

const apiConnexion = {
    getAllCategories: async (): Promise<CategorieDTO[]> => {
        try {
            const response: AxiosResponse<ListeCategorie> = await axios.get(`${API_BASE_URL}/liste`);
            const categories=response.data.categories.map(categorie=<)

        } catch (error) {

        }
    }
}