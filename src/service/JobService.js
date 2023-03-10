import { useState } from "react";


class JobService{


    //**Method to get all employee from our api or database */

    /**MEthod to save employee */
    saveJob(jobData){

        return       fetch("http://localhost:8080/job/addJob",{
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(jobData)
     
     });
    }
    updateJob(jobid, jobData){
      
        return fetch(`http://localhost:8080/job/${jobid}`,{
         method:"PUT",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(jobData)
     });
    }
    getJobById(jobid){
      return fetch(`http://localhost:8080/job/${jobid}`).then(
         res => res
      ).catch(console.log("error"));
    }

}
export default new JobService();

/*jobService class contenant tout les methodes en relation avec job*/
/* et faire de même pour les autres compenants*/