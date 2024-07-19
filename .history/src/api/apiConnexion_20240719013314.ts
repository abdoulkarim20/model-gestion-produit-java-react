import axios, { AxiosResponse } from "axios";
import { CategorieDTO } from "../models/categorie/categorieDTO";
import { CategorieListeResponse } from "../models/categorie/getListeCategorieResponse";
import { API_BASE_URL } from "../../config.ts";
import { CategorieDetailReponse } from "../models/categorie/getCategorieByIdResponse";

const apiConnexion = {

    getAllCategories: async (): Promise<CategorieDTO[]> => {
        try {
            const response: AxiosResponse<CategorieListeResponse> = await axios.get(`${API_BASE_URL}/categories/liste`);
            console.log("Le resultat du backend est:",response);
            
            const categories = response.data.map(categorie => ({
                ...categorie
            }));
            return categories;

        } catch (error) {
            console.log("Error lors de la recuperation de la liste des categories d'un produit", error);
            throw error;
        }
    },
    createCategorie: async (categorie: CategorieDTO): Promise<void> => {
        try {
            await axios.post<number>(`${API_BASE_URL}/save-categorie`, categorie);
        } catch (error) {
            console.log("Erreur lors de la creation d'une categorie", error);
            throw error;
        }
    },
    updateCategorie: async (categorie: CategorieDTO): Promise<void> => {
        try {
            await axios.put<number>(`${API_BASE_URL}/update-categorie`, categorie);
        } catch (error) {
            console.log("Erreur lors de la mise a jour d'une categorie", error);
            throw error;
        }
    },
    deleteCategorie: async (id: number): Promise<void> => {
        try {
            await axios.delete<number>(`${API_BASE_URL}/delete-categorie/${id}`)
        } catch (error) {
            console.log("Erreur lors de la suppression d'une categorie", error);
            throw error;
        }
    },
    getCategorieDetail: async (id: number): Promise<CategorieDTO | undefined> => {
        try {
            const response = await axios.get<CategorieDetailReponse>(`${API_BASE_URL}/detail-categorie/${id}`)
            return response.data.categorie;
        } catch (error) {
            console.log("Erreur lors de la recuperation du detail d'une categorie", error);
            throw error;
        }
    }
}

export default apiConnexion;