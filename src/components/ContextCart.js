import React, { useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items.js';
import { CartContext } from './Cart.js';

const ContextCart = () => {
   
    const { item} = useContext(CartContext);
  
    return (
    <>
      <header>
        <div className='continue-shopping'>
          <img style = {{width: "180px", height: "120px" }} src='./images/firstchoice.jpg' alt='firstchoice' className='arrow-icon' />
          <h3 style={{fontSize: "30px", fontWeight: "bold"}}>Mahindra First Choice</h3>
        
        
        </div>
        
        
        <div className='cart-icon'>
        <img style= {{width: "100px", height: "100px"}}src='./images/whatsapp-1.webp' alt='whatsapp-1'/>
        <img src='./images/facebook.png' alt='facebook'/>
        </div>
    
    </header>
           <section className='main-cart-section'>
               <div style = {{ backgroundColor: "green", paddingbottom: '10px'}}className='hr'>
              <h1>Cart</h1>
              </div>
              <div className='cart-items'>
                <div className='cart-items-container'>
                <Scrollbars>
                  { item.map((curItem)=>{
                    return <Items key={ curItem.id } {...curItem} /> 
                  })}
                
                </Scrollbars>
                  </div>
              </div>
              <div className='card-total'>
                <h3 style={{backgroundColor: "blue"}}>Cart Total: <span>6,459rs</span></h3>
                <button style={{backgroundColor: "blue"}}>PAY</button>
              </div>
           </section>
      
    </>
  )
}

export default ContextCart