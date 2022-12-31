import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1> 로그인 페이지 </h1>
      <form>
        <input required type='text' placeholder='아이디'/>
        <input required type='password' placeholder='비밀번호'/>
        <button>로그인</button>
        <p>입력하신 정보가 일치하지 않습니다</p>
        <span>회원이 아니신가요? <Link to='/register'> 회원가입 </Link> </span> 
      </form>
    </div>
  )
}

export default Login