import React from 'react'

const Menu = () => {
const posts = [
    {
      id: 1,
      title: "것이 싶이 풀이 못하다 인류의 열락의 피다.",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "눈에 가는 희망의 뜨고, 봄바람이다. 것이 가슴에 그들의 인생의 그들은 어디 있는가? ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "속잎나고, 그림자는 열락의 영원히 피고 그들의 어디 부패뿐이다. ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "있는 그림자는 미인을 것이다. 같으며, 청춘 새가 보배를 아름다우냐?",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className='menu'>
        <h1>블로그에 올라온 다른 글</h1>
        {posts.map((post) => (
        <div className="post" key={post.id}>
          {/* <img src={`../upload/${post?.img}`} alt="" /> */}
          <img src={post.img}  alt=""/>
          <h2>{post.title}</h2>
          <button>더보기</button>
        </div>
      ))}
    </div>
  )
}

export default Menu