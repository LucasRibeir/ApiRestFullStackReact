import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:7080/employeers';
const EMPLOYEE_BASE_REST_API_URL_SAVE = "http://localhost:7080/employee/save"

class EmployeeService {
    
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)

    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL_SAVE, employee)
    }
}

export default new EmployeeService();