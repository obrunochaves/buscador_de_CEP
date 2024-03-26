import axios from "axios";


// baseURL é a base da URL que nunca muda => https://viacep.com.br/ws/   29170073/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;