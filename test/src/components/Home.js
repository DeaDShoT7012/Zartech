import React,{useEffect,useState} from 'react'
import { Dishes } from '../actions/homeAction'
import { useDispatch,useSelector } from 'react-redux'
import Content from './Content'
import Tabhead from './Tabhead'
import './Home.css'
import Header from './Header'


function Home() {
  
  const dispatch = useDispatch()
  const [activeTab,setActiveTab] = useState(0)

  useEffect(() => {
    dispatch(Dishes())
  }, [])

  const [cart,setcart] = useState(0)

  const {dishes} = useSelector(state=>state.dishReducer)
  console.log(dishes);
  
  return (
    <div>
      <Header cart={cart}/>
        <div>
          {
            dishes.map(tablelist=>(
             <div>

             <div className='menu_category'>
               { 
               tablelist.table_menu_list.map((menulist,index)=>(
                  <>
                  { <Tabhead activeTab={activeTab} index={index} menulist={menulist} setActiveTab={setActiveTab}/> }
                  </>
                ))
                }
             </div>

              <div className='d-flex'>
                {
                tablelist.table_menu_list.map((menulist,index)=>(
                  <>
                  {<Content cart={cart} setcart={setcart} index={index} activeTab={activeTab} menulist={menulist} />}
                   </> 
                ))
                }
              </div>
             </div>
            ))
          }
        
            
        </div>
    </div>
  )
}

export default Home