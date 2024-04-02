import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
});

export class UnsplashApi {
  constructor() {
    this.currentPage = 1;
    this.query = null;
  }

  async fetchImages() {
    const options = {
      headers: {
        Authorization: "Client-ID 2V4Gfo4PlwInIQmbj4lcUzilY0OSMOaFx0z7l7ZWwbY",
      },
      params: {
        query: this.query,
        page: this.currentPage,
      },
    };
    const res = await instance.get("/search/photos", options);
    return res.data;
  }
}