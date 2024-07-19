import axios, { AxiosResponse } from "axios";
import { CategorieDTO } from "../models/categorie/categorieDTO";
import { ListeCategorie } from "../models/categorie/getListeCategorieResponse";

const apiConnexion={
    getAllCategories:async ():Promise<CategorieDTO[]>=>{
        try {
            const response:AxiosResponse<ListeCategorie>=await axios.get(``) 
            
        } catch (error) {
            
        }
    }
}