import React from 'react'
import './Thead,.css'

function Tabhead({menulist,setActiveTab,index,activeTab}) {
    let show = 'grey'
    let borderBottom="2px solid grey"
    if(index===activeTab){
        show='red'
        borderBottom='2px solid red'
    }
  return (
    <div>
        <h4 className='category'
         style={{
          color:show,
          borderBottom:borderBottom
        }}
          onClick={()=>setActiveTab(index)}>{menulist.menu_category}</h4>
    </div>
  )
}

export default Tabhead