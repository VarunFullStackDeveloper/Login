export const UserLoginPage=()=>{
    return(
        <form className="form" action="/action_page.php">
           <label for="fname">Username</label>
           <input type="text" id="fname" name="fname"></input><br/>
           <span></span>
           <label for="lname">Password</label>
           <input type="text" id="lname" name="lname"></input><br/>
           <span></span>
           <input type="submit" value="Submit"></input>
   </form>
    )
}
