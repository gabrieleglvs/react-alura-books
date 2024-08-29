import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
  const response = await favoritosAPI.get('/')

  return response.data //aqui estou retornando todos os livros
}

export {
  getFavoritos
}