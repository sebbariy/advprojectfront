


class BusinessService{


    //**Method to get all employee from our api or database */

    /**MEthod to save employee */
    saveBusiness(busData){

        return       fetch("http://localhost:8080/business/addBusiness",{
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(busData)
     
     });
    }
    updateBusiness(busid, busData){
      
        return fetch(`http://localhost:8080/business/${busid}`,{
         method:"PUT",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(busData)
     });
    }
    getBusinessById(busid){
      return fetch(`http://localhost:8080/business/${busid}`).then(
         res => res
      ).catch(console.log("error"));
    }

}
export default new BusinessService();

/*jobService class contenant tout les methodes en relation avec job*/
/* et faire de même pour les autres compenants*/