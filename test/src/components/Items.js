import React,{useState} from 'react'

export const Items=({categorylist,show,setcart,cart})=> {
    const [counter,setcounter] = useState(0)

    const inc = ()=>{ 
      setcounter(counter+1) 
      setcart(cart+1)       
    }

    const dec = ()=>{
        if(counter>=1){
            setcounter(counter-1)
            setcart(cart-1)
        }
    } 

   
    

    
  return (
    <div>
         <div className='row'>
              <div className='col-6 col-sm-6 col-md-6 col-lg-7 col-xl-8'>
                <h5 style={{display:show}}><b>{categorylist.dish_name}</b></h5>
                <b style={{display:show}}>{categorylist.dish_currency} {categorylist.dish_price}</b>
                <p  style={{display:show}}>{categorylist.dish_description}</p>
                    {categorylist.dish_Availability?
                          <div style={{display:show,background:'green',height:'30px',width:'90px',borderRadius:'15px'}}>
                          <button style={{border:'none',background:'none',color:'white'}} onClick={()=>dec()}><i class="fa-solid fa-minus"></i></button>
                          <input style={{width:'20px',height:'20px',border:'none',background:'none',color:'white'}} className='ms-1 text-center' type={Text} value={counter}/>
                          <button style={{border:'none',background:'none',color:'white'}} onClick={()=>inc()} className='ms-1'><i class="fa-solid fa-plus"></i></button>
                      </div>:''
                    }
              
                {categorylist.addonCat.length?
                <p className='text-danger'><b>Customizations available</b></p>:''
                }

              </div>
              <div className='col-2 col-sm-3 col-md-3 col-lg-2 col-xl-3 d-flex  align-items-center'>
                <div><p style={{display:show}}><b>{categorylist.dish_calories} Calories</b></p></div>
              </div>
              <div className='col-4 col-sm-3 col-md-3 col-lg-3 col-xl-1 d-flex  align-items-center'>
                <div><img style={{display:show,height:'100px',width:'100px',borderRadius:'20px'}} src={categorylist.dish_image}/></div>
              </div>
              <hr/>
            </div> 
    </div>
  )
}


export default Items
