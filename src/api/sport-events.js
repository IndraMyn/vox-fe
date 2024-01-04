import axios from "axios";
import config from "./constant.js";
import constant from "./constant.js";

var baseUrl = constant.baseUrl;

const handleList = async (page, perPage) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(baseUrl + "/api/v1/sport-events", {
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: {
                page: page,
                perPage: perPage
            }
        });
        return response;

    } catch (error) {

        alert(error.response.data.title || error.response.data.message);
        return null;
    }
}

const handleRemove = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(baseUrl + "/api/v1/sport-events/" + id, {
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

const handleCreate = async (organizersName, imageLocation) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(baseUrl + "/api/v1/sport-events", {
            organizersName: organizersName,
            imageLocation: imageLocation
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

const handleDetail = async (id) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(baseUrl + "/api/v1/sport-events/" + id, {
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

const handleUpdate = async (id, eventName, eventType, eventDate, organizerId) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(baseUrl + "/api/v1/sport-events/" + id, {
            eventName: eventName,
            eventType: eventType,
            eventDate: eventDate,
            organizerId: organizerId
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
    handleList,
    handleRemove,
    handleCreate,
    handleDetail,
    handleUpdate
}