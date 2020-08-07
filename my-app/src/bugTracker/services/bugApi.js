import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

export default {
    async getAll(){
        const response = await axios.get(serviceEndPoint);
        return response.data;            
    },
    async getById(id){
        const response = await axios.get(`${serviceEndPoint}/${id}`);
        return response.data;      
    },
    async save(bugData){
        if (bugData.id === 0){
            const response = await axios.post(serviceEndPoint, bugData);
            return response.data;
        } else {
            const response = await axios.put(`${serviceEndPoint}/${bugData.id}`, bugData);
            return response.data;
        }
    },
    async remove(bugData){
        const response = await axios.delete(`${serviceEndPoint}/${bugData.id}`);
        return response.data;
    }
}