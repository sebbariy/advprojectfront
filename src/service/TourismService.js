import { useState } from "react";


class TourismService{


    //**Method to get all employee from our api or database */

    /**MEthod to save employee */
    saveTourism(tourismData){

        return       fetch("http://localhost:8080/tourism/addTourism",{
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(tourismData)
     
     });
    }
    updateTourism(tourismid, tourismData){
      
        return fetch(`http://localhost:8080/tourism/${tourismid}`,{
         method:"PUT",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(tourismData)
     });
    }
    getTourismById(tourismid){
      return fetch(`http://localhost:8080/tourism/${tourismid}`).then(
         res => res
      ).catch(console.log("error"));
    }

}
export default new TourismService();

/*jobService class contenant tout les methodes en relation avec job*/
/* et faire de même pour les autres compenants*/