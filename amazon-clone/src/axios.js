import axios from "axios";

const instance = axios.create({
    baseURL:  // API (cloud function) URL 
    // "http://localhost:5001/clone-27da0/us-central1/api" 
    "https://us-central1-clone-27da0.cloudfunctions.net/api",
});

export default instance;