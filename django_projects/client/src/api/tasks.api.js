import axios from "axios";

export const getAlltasks = () => {
    return axios.get('http://localhost:8000/Tasks/api/v1/tasks/')
};