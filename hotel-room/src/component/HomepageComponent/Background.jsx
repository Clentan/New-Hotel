import React from 'react'
import Picture from '...'

export default function Background() {

    const picture=[
        {id:1 ,name:'picture',url:"images/backgroundImages/picture1.jpeg"},
        {id:2 ,name:'picture',url:"images/backgroundImages/picture2.jpeg"},
        {id:3 ,name:'picture',url:"images/backgroundImages/picture3.jpeg"},
        {id:4 ,name:'picture',url:"images/backgroundImages/picture4.jpeg"},
    ]
  return (
    <div>
        <div>
            <img src={picture[0].url} alt="background"/>
        </div>
      
    </div>
  )
}
