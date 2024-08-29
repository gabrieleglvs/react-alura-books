import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
  const response = await favoritosAPI.get('/')

  return response.data //aqui estou retornando todos os livros
}

async function postFavorito(id) {
  await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
  await favoritosAPI.delete(`/${id}`)
}

export {
  getFavoritos,
  postFavorito,
  deleteFavorito
}