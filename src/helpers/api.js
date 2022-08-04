import Cookies from "js-cookie";
import qs from "qs";
import { doLogout } from "./authHandler";
// const BASEAPI = "http://192.168.129.122:5000";
const BASEAPI = "http://localhost:5000";

const apiFetchPost = async (endpoint, body) => {
    if (!body.token) {
        const token = Cookies.get("token");
        if (token) body.token = token;
    }

    const response = await fetch(
        BASEAPI + endpoint,

        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify(body),
        }
    );
    const json = await response.json();

    if (json.notallowed) {
        doLogout();
        window.location.href = "/signin";
        return;
    }

    return json;
};

const apiFetchPut = async (endpoint, body) => {
    if (!body.token) {
        const token = Cookies.get("token");
        if (token) body.token = token;
    }

    const response = await fetch(
        BASEAPI + endpoint,

        {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify(body),
        }
    );

    const json = await response.json();

    if (json.notallowed) {
        doLogout();
        window.location.href = "/signin";
        return;
    }

    return json;
};

const apiFetchGet = async (endpoint, body = []) => {
    if (!body.token) {
        const token = Cookies.get("token");
        if (token) body.token = token;
    }

    const response = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);

    const json = await response.json();

    if (json.notallowed) {
        window.location.href = "/signin";
        return;
    }

    return json;
};

const API = {
    login: async (email, password) => {
        const json = await apiFetchPost("/user/signin", { email, password });
        return json;
    },

    signup: async (name, email, password) => {
        const json = await apiFetchPost("/user/signup", {
            name,
            email,
            password,
        });
        return json;
    },

    getProduct: async (id) => {
        const json = await apiFetchGet(`/product/${id}`);
        return json;
    },

    getProducts: async () => {
        const json = await apiFetchGet("/product/list");
        return json;
    },

    updateProduct: async (id, name, price, description, image) => {
        const json = await apiFetchPut(`/product/${id}`, {
            name,
            price,
            description,
            image,
        });
        return json;
    },

    addProduct: async (name, price, description, category) => {
        const json = await apiFetchPost("/product/add", {
            name,
            price,
            description,
            category,
        });
        return json;
    },

    getCategories: async () => {
        const json = await apiFetchGet("/category/list");
        return json;
    },

    getApi: () => {
        return BASEAPI;
    },
};

export default () => API;
