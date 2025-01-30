import { useState } from 'react'
import './CardUser.css'
import "./Like.css";

  function Like(){
    const [like, setLike] = useState(42)
  
    const handleClick = (event) => {
      event.target.classList.toggle('like');
      if (event.target.classList.contains('like')) {
        setLike(like + 1);
      } else {
        setLike(like - 1);
      }
    };
  
    return(
      <div className='div1'>
        <div className='div2' onClick={(event) => handleClick(event)}> jaime</div>
        <div className="like-count">
          {like} likes
        </div>
      </div>
      
    )
  
  }
  export default Like