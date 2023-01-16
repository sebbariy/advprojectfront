
class UserService{


    //**Method to get all employee from our api or database */

    /**MEthod to save employee */
    saveUser(userData){

        return       fetch("http://localhost:8080/user/addUser",{
         method:"POST",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(userData)
     
     });
    }
    updateUser(userid, userData){
      
        return fetch(`http://localhost:8080/user/${userid}`,{
         method:"PUT",
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(userData)
     });
    }
    getUserById(userid){
      return fetch(`http://localhost:8080/user/${userid}`).then(
         res => res
      ).catch(console.log("error"));
    }

}
export default new UserService();

/*jobService class contenant tout les methodes en relation avec job*/
/* et faire de même pour les autres compenants*/