import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:7080/employeers';
const EMPLOYEE_BASE_REST_API_URL_SAVE = "http://localhost:7080/employee/save";
const EMPLOYEE_BASE_REST_API_URL_GET =  "http://localhost:7080/employee";

class EmployeeService {
    
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)

    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL_SAVE, employee)
    }

getEmployeeId(employeeId){
return axios.get(EMPLOYEE_BASE_REST_API_URL_GET + '/' + employeeId)

}

}


export default new EmployeeService();