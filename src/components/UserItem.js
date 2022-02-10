import React from 'react'

const UserItem = ({myrec}) => {
  return (
    <div>
         <div className="post">
  <div className="img-post">
  
    <img
      className="img-size-recipe"
      src={myrec.image}
      alt=""
    />
  </div>
  <h3 className="m-2">{myrec.title}</h3>
  
  <div className="owner">
    <img
      className="avator"
      src="http://localhost:8000/api/media/149907731-a-saudi-man-icon-wearing-shemagh-and-a-thobe.webp"
      alt="owner"
      
    />
    <h6>{myrec.owner.username}</h6>
  </div>
</div>
    </div>
  )
}

export default UserItem