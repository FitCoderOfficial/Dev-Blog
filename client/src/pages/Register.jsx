import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      const res = await axios.post("/auth/register", inputs)
      console.log(res)
    }catch (err){
      console.log(err)
    }

  }


  return (
    <div className='auth'>
      <h1> 회원가입 페이지 </h1>
      <form>
        <input required type='text' placeholder='아이디' name='username' onChange={handleChange}/>
        <input required type='email' placeholder='이메일' name='email' onChange={handleChange}/>
        <input required type='password' placeholder='비밀번호' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>회원가입</button>
        <p>입력하신 정보가 일치하지 않습니다</p>
        <span>이미 회원이신가요? <Link to='/login'> 로그인 </Link> </span> 
      </form>
    </div>
  )
}

export default Register