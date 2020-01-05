import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b20eacb5ce97108d4c87e3d53e77606a351b9b316a6986d6a9f9c2380d337cd9"
  }
});
