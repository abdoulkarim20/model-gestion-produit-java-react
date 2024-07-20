import axios, { AxiosResponse } from "axios";
import { CategorieDTO } from "../models/categorie/categorieDTO";
import { API_BASE_URL } from "../../config.ts";

const apiConnexion = {

    getAllCategories: async (): Promise<CategorieDTO[]> => {
        try {
            const response: AxiosResponse<CategorieDTO[]> = await axios.get(`${API_BASE_URL}/categories/liste`);
            const categories = response.data.map((categorie: CategorieDTO) => ({
                ...categorie
            }));
            return categories;

        } catch (error) {
            console.log("Error lors de la recuperation de la liste des categories d'un produit", error);
            throw error;
        }
    },
    createCategorie: async (categorie: CategorieDTO): Promise<CategorieDTO> => {
        try {
            const response = await axios.post<CategorieDTO>(`${API_BASE_URL}/save-categorie`, categorie);
            return response.data;
        } catch (error) {
            console.log("Erreur lors de la creation d'une categorie", error);
            throw error;
        }
    },
    updateCategorie: async (categorie: CategorieDTO): Promise<CategorieDTO> => {
        try {
            const response =await axios.put<CategorieDTO>(`${API_BASE_URL}/update-categorie`, categorie);
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
            const response = await axios.get<CategorieDTO>(`${API_BASE_URL}/detail-categorie/${id}`)
            return response.data;
        } catch (error) {
            console.log("Erreur lors de la recuperation du detail d'une categorie", error);
            throw error;
        }
    }
}

export default apiConnexion;