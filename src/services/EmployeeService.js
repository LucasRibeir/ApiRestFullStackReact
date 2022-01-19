import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:7080/employeers';
const EMPLOYEE_BASE_REST_API_URL_SAVE = "http://localhost:7080/employee/save";
const EMPLOYEE_BASE_REST_API_URL_GET =  "http://localhost:7080/employee";
const EMPLOYEE_BASE_REST_API_URL_UPDATE = "http://localhost:7080/employee/update";

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
updateEmployee(employee , employeeId){
    return axios.put(EMPLOYEE_BASE_REST_API_URL_UPDATE + '/' + employee , employeeId)
}

}


export default new EmployeeService();