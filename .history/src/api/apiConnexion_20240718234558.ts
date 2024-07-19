import axios, { AxiosResponse } from "axios";
import { CategorieDTO } from "../models/categorie/categorieDTO";
import { ListeCategorie } from "../models/categorie/getListeCategorieResponse";
import { API_BASE_URL } from "../../config.ts";

const apiConnexion = {

    getAllCategories: async (): Promise<CategorieDTO[]> => {
        try {
            const response: AxiosResponse<ListeCategorie> = await axios.get(`${API_BASE_URL}/liste`);
            const categories = response.data.categories.map(categorie => ({
                ...categorie
            }));
            return categories;

        } catch (error) {
            console.log("Error lors de la recuperation de la liste des categories d'un produit", error);
            throw error;
        }
    }
    createCategorie: async (categorie:CategorieDTO): Promise<void> => {
        try {
            await axios.post<number>(`${API_BASE_URL}/save-categorie`)
        } catch (error) {
            console.log("Erreur lors de la creation d'une categorie", error);
            throw error;
        }
    }
}