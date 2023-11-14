import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "08f5abd98d26412497ba6bcbcdf198a8"
    }
})