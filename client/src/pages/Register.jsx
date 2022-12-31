import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1> 회원가입 페이지 </h1>
      <form>
        <input required type='text' placeholder='아이디'/>
        <input required type='email' placeholder='이메일'/>
        <input required type='password' placeholder='비밀번호'/>
        <button>회원가입</button>
        <p>입력하신 정보가 일치하지 않습니다</p>
        <span>이미 회원이신가요? <Link to='/login'> 로그인 </Link> </span> 
      </form>
    </div>
  )
}

export default Register