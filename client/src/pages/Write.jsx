import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'




const Write = () => {
  const [value, setValue] = useState('');


  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='제목' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />

        </div>

      </div>
      <div className="menu">
        <div className="item">
          <h1>상태</h1>
          <span>
            <b>status:</b> 초안
          </span>
          <span>
            <b>status:</b> 공개됨
          </span>
          <input stule={{display:"none"}} type="file" name="" id="file"/>
          <label className='file' htmlFor=''>이미지 업로드</label>
          <div className="buttons">
            <button>저장하기</button>
            <button>업데이트</button>
          </div>
        </div>
        <div className="item">
          <h1>카테고리</h1>
          <div className='cat'>
          <input type="radio" name="cat" value="python" id="python"/>
          <label htmlFor='python'>파이썬</label>
          </div>

          <div className='cat'>
          <input type="radio" name="cat" value="js" id="js"/>
          <label htmlFor='js'>자바스크립트</label>
          </div>

          <div className='cat'>
          <input type="radio" name="cat" value="nextjs" id="nextjs"/>
          <label htmlFor='nextjs'>nextjs</label>
          </div>

          <div className='cat'>
          <input type="radio" name="cat" value="django" id="django"/>
          <label htmlFor='django'>장고</label>
          </div>

          <div className='cat'>
          <input type="radio" name="cat" value="frontend" id="frontend"/>
          <label htmlFor='frontend'>프론트엔드</label>
          </div>

          <div className='cat'>
          <input type="radio" name="cat" value="backend" id="backend"/>
          <label htmlFor='backend'>백엔드</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Write