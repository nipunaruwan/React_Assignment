import React from 'react'
import './login.css'
const LoginForm = () => {
  return (
    <div className='main_panal'> 

<div className='login_panal'>
<div id='box_lable'>
<div id='icon_image'></div>
<h3>Login</h3>
</div>


<div id='boxform'>
  <input type="text" placeholder='Username'/>
  <input type="password" placeholder='password'/>

</div>
<div id='box_botton'>

<div id='btn_login'><a href="/login" id='a_login'>Login</a></div>
 <h5>Create new user account? <a href="/singup">click here</a></h5>
</div>


</div>

    </div>
  )
   
}

export default LoginForm