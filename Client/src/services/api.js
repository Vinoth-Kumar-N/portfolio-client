import axios from 'axios';

const API = import.meta.env.VITE_API;

//comment endpoints
const addComment = (commentdata) => axios.post(`${API}/comments/add`, commentdata);



//projects endpoints
const getProjects = () => axios.get(`${API}/projects/all`);
const addProject = (projectdata) => axios.post(`${API}/projects/add`, projectdata);
const deletepro = (id) => axios.delete(`${API}/projects/delete/${id}`);


export { addComment, getProjects, addProject, deletepro };





// export {getProjects, addProject, deletepro};