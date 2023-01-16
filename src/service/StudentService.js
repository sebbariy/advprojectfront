import { useState } from "react";


class StudentService{


    //**Method to get all employee from our api or database */

    /**MEthod to save employee */
    saveStudent(studentData){

        return       fetch("http://localhost:8080/student/addStudent",{
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(studentData)
     
     });
    }
    updateStudent(schoolid, studentData){
      
        return fetch(`http://localhost:8080/student/${schoolid}`,{
         method:"PUT",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(studentData)
     });
    }
    getStudentById(schoolid){
      return fetch(`http://localhost:8080/student/${schoolid}`).then(
         res => res
      ).catch(console.log("error"));
    }

}
export default new StudentService();

/*jobService class contenant tout les methodes en relation avec job*/
/* et faire de même pour les autres compenants*/