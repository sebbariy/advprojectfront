import axios from "axios";


const BASE_URL="http://localhost:8080/job";
class JobService{
   /* Method to get all jobs from the api back end */
   getAllJobs(){
    return axios.get(BASE_URL);
   }
}

export default new JobService();