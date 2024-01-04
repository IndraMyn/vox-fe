import axios from "axios";
import config from "./constant.js";
import constant from "./constant.js";

var baseUrl = constant.baseUrl;

const handleLogin = async (email, password) => {
    try {

        const response = await axios.post(baseUrl + "/api/v1/users/login", {
            email: email,
            password: password
        });

        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.id);

            window.location.href = '/users';

        } else {
            alert("Email atau Password salah!");
        }
    } catch (error) {
        alert("Email atau Password salah!");
    }
}

const handleCreate = async (firstName, lastName, email, password, repeatPassword) => {
    try {

        const response = await axios.post(baseUrl + "/api/v1/users", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            repeatPassword: repeatPassword
        });

        alert("Berhasil");

    } catch (error) {

        alert(error.response.data.title || error.response.data.message);
    }
}

const handleDetail = async () => {
    try {

        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        const response = await axios.get(baseUrl + "/api/v1/users/" + id, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return response;

    } catch (error) {

        alert(error.response.data.title || error.response.data.message);
        return null;
    }
}

const handleUpdate = async (firstName, lastName, email) => {
    try {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        const response = await axios.put(baseUrl + "/api/v1/users/" + id, {
            firstName: firstName,
            lastName: lastName,
            email: email
        },
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        alert("Berhasil");
        return response;

    } catch (error) {

        alert(error.response.data.title || error.response.data.message);
        return null;
    }
}

const handlePassword = async (password, newPassword, repeatPassword) => {
    try {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        const response = await axios.put(baseUrl + "/api/v1/users/" + id + "/password", {
            password: password,
            newPassword: newPassword,
            repeatPassword: repeatPassword
        },
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        alert("Berhasil");
        return response;

    } catch (error) {

        alert(error.response.data.title || error.response.data.message);
        return null;
    }
}
export {
    handleLogin,
    handleCreate,
    handleDetail,
    handleUpdate,
    handlePassword
}