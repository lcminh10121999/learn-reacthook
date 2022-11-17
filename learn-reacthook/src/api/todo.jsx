import axiosClient from "./axiosClient";
import axios from "axios";
const productApi = {
  async getAll() {
    const response = await axiosClient.get("/DB_CARD");
    return response.data;
  },

  //   async get(id) {
  //     const url = `products/${id}/`;
  //     const response = await axiosClient.get(url);
  //     return response;
  //   },

  async add(data) {
    // const url = "carList";
    // const response = await axiosClient.post("carList", data);
    // console.log(response);
    // return response;
    try {
      console.log(data);
      const response = await axiosClient.post("/DB_CARD", data);

      // return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
};

export default productApi;
