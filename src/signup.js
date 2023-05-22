export const UserSignupPage=()=>{
    return(
        <form className="form" action="/action_page.php">
           <label for="fname">First name:</label>
           <input type="text" id="fname" name="fname"></input><br></br>
           <label for="lname">Last name:</label>
           <input type="text" id="lname" name="lname"></input><br></br>
           <label for="email">Email:</label>
           <input type="email" id="fname" name="fname"></input><br></br>
           <label for="mobilenum">Mobile Number:</label>
           <input type="number" id="fname" name="fname"></input><br></br>
           <label for="pass">Password:</label>
           <input type="password" id="fname" name="fname"></input><br></br>
           <input type="submit" value="Submit"></input>
   </form>
    )
}