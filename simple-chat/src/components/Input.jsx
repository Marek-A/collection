import React from 'react'
import Attach from '../images/icons/attachment.png'
import Img from '../images/icons/img.png'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="What's on your mind?" />
      <div className="send">
        <img src={Attach} alt="attachment" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="img" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input