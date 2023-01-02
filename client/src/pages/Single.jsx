import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from '../components'

import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="user">
            <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="info">
              <span>유저 이름</span>
              <p>17시간 전</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`} >
                <img src={Edit} alt="" /> 
              </Link>                        
                <img src={Delete} alt="" />
            </div>
          </div>
          <h1>북 ‘군서열 1위’ 박정천 해임…남한 무인기 때문?</h1>

          
          <p>열락의 같은 않는 심장의 내려온 낙원을 쓸쓸한 것이다. 그들은 어디 간에 원질이 희망의 트고, 이것이다. 생생하며, 무엇을 소금이라 원질이 청춘을 이상은 이성은 같지 청춘의 있는가? 같으며, 보배를 피부가 피가 황금시대다. 인류의 열락의 이는 품에 오아이스도 그들의 그들의 황금시대의 쓸쓸하랴? 열락의 돋고, 싹이 곳으로 하는 있을 미인을 것이다. 그들에게 못할 가슴이 무한한 뛰노는 이상의 낙원을 위하여서. 이성은 넣는 사는가 운다. 우리의 인생에 지혜는 옷을 운다.</p>

          <p>끓는 인생을 옷을 따뜻한 어디 우리 천자만홍이 봄바람이다. 것은 목숨을 역사를 보는 것은 사막이다. 원질이 크고 인생에 있다. 따뜻한 영락과 피에 바로 품에 것이다. 눈이 피고 우리 뭇 커다란 듣는다. 능히 공자는 이상은 찬미를 위하여 이상, 것이 싶이 황금시대다. 남는 생생하며, 바로 몸이 청춘은 얼마나 소금이라 얼마나 사막이다. 바로 꽃이 살 찾아다녀도, 작고 미묘한 그들에게 뜨고, 것이다. 인간의 황금시대를 갑 방지하는 것은 그들의 안고, 이것은 고행을 뿐이다. 바이며, 때까지 타오르고 얼음 인생에 있다.</p>

          <p>피가 자신과 가치를 기쁘며, 하는 힘있다. 있는 어디 이것이야말로 가치를 그리하였는가? 그들의 갑 힘차게 청춘은 이상은 실로 피고 황금시대다. 가슴이 모래뿐일 설산에서 꾸며 것이다. 가치를 아름답고 스며들어 보내는 풀이 더운지라 물방아 그들은 곳으로 있는가? 눈이 보이는 거선의 오아이스도 것은 것이 것이다. 내려온 청춘은 가장 튼튼하며, 가치를 날카로우나 동력은 위하여, 이상의 봄바람이다. 실로 그들은 것이다.보라, 지혜는 것이다. 이 이상이 대한 찾아 때까지 우리의 것이다.</p>
          

      </div>
      <Menu />
    </div>
  )
}

export default Single