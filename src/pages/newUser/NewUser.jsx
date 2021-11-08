import "./newUser.css"



const NewUser = () => {

return(
    <div className="newUser">
        <h1 className="newUserTitle">Create new user</h1>
        <form  className="newUserForm">
<div className="newUserItem">
    <label htmlFor="" className="">Username</label>
    <input type="text" placeholder='rizwan.96' />
</div>
<div className="newUserItem">
    <label htmlFor="" className="">Full Name</label>
    <input type="text" placeholder='Rizwan Kabir' />
</div>
<div className="newUserItem">
    <label htmlFor="" className="">Email</label>
    <input type="email" placeholder='rizwankabirsizan@gmail.com' />
</div>
<div className="newUserItem">
    <label htmlFor="" className="">Mobile</label>
    <input type="text" placeholder='+4917642049216' />
</div>
<div className="newUserItem">
    <label htmlFor="" className="">Address</label>
    <input type="text" placeholder='Essen, Deutschland' />
</div>
<div className="newUserItem">
    <label htmlFor="" className="">Password</label>
    <input type="password" placeholder='password' />
</div>
<div className="newUserItem">
    <label htmlFor="" className="">Gender</label>
   <div className="newUserGender">
   <input type="radio" name="gender"  id='male' value='male'/>
    <label for="male">Male</label>

    <input type="radio" name="gender"  id='female' value='female'/>
    <label for="female">Female</label>
    <input type="radio" name="gender"  id='otherss' value='otherss'/>
    <label for="other">Other</label>
   </div>

</div>
<div className="newUserItem">
    <label>Active</label>
    <select className="newUserSelect" id="active" name="active">
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </select>
</div>
        </form>
        </div>
 )

}

export default NewUser;