import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed, goToCreateAddress } from "../routes/coordinator";

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((resp) => {
        localStorage.setItem("token", resp.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
        alert("Usuário não encontrado")
    })
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/signup`, body, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((resp) => {
        localStorage.setItem("token", resp.data.token)
        clear()
        goToCreateAddress(history)
    })
    .catch((err) => {
        alert("Email ou CPF já cadastrados")
    })
}