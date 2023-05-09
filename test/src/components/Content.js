import React ,{useState}from 'react'
import Items from './Items'

function Content({menulist,index,activeTab,setcart,cart}) {
    let show = 'none'
    if(index===activeTab){
        show='block'
    }

   
   

  return (
    <div style={{width:'100%',display:show,overflowX:'hidden'}} className='container' >
       <div>
          { 
          menulist.category_dishes.map(categorylist=>(
           <Items cart={cart} setcart={setcart} show={show} categorylist={categorylist}/>    
          ))
          }
       </div>
    </div>
  )
}

export default Content