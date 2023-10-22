import axios from "axios";

export const getSingleProduct = async (id) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => {
      console.log("Error: ", err);
    });

  if (response.status === 200) {
    return response.data;
  } else {
    return {};
  }
};

export const getProducts = async () => {
  const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Error: ", err);
    });

  if (response.status === 200) {
    return response.data;
  } else {
    return [];
  }
};
