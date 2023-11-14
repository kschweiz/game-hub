import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "fb17f3fc58354f76bae744d5255a399b"
    }
})