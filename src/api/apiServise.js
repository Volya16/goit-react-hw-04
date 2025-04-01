import axios from "axios";

const API_KEY = "FUFlBu2Z_5j0y7aPoQoLKTpxpMVWVnq1h8zw-c7iNbg";
const BASE_URL = "https://api.unsplash.com/search/photos";

export default async function fetchImges(newImages, currentPage) {
  const response = await axios.get(BASE_URL, {
    params: {
      client_id: API_KEY,
      query: newImages,
      per_page: 12,
      page: currentPage,
      orientation: "landscape",
    },
  });

  return response.data;
}
