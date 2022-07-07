import axios from "axios";

const endpoint = "http://localhost:5555";

export const SendAddMovieDetails = async (data: any) => {
  try {
    console.log(data);
    await axios.post(`${endpoint}/add`, data);
  } catch (err) {
      console.log("Error While calling SendAddMovie Details API", data);
  }
};

export const getAllMovieDetails = async () => {
  try {
    return await axios.get(`${endpoint}/all`);
  } catch (err) {
    console.log("Error While calling getAllmovie Details API");
  }
};

export const getEditDetails = async (id: any) => {
  try {
    return await axios.get(`${endpoint}/edit/${id}`);
  } catch (err) {
    console.log("Error While calling getAllMovieDetails API");
  }
};

export const editDetailsApi = async (id: any, movie: any) => {
  try {
    return await axios.put(`${endpoint}/edit/${id}`, movie);
  } catch (err) {
    console.log("Error While calling getEdit Details API");
  }
};

export const deleteDetailsApi = async (id: any) => {
  try {
    return await axios.delete(`${endpoint}/delete/${id}`)
  } catch (error) {
    console.log("Error while calling delete api");
  }
}