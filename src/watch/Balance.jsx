import '../watch/Balance.css'
import momo from '../images/image1.png'
import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { redirect } from 'react-router-dom';
function Balance(){
    // const [openModal,setOpenModel] =useState();
    const [model,setModel]=useState(false);
    function openModal(){
      setModel(!model)
      }
      
const handleSave = () =>{
    onSave();
    onClose();
  };
    return(
        
< div className='balances'>

<div className='content'>

<b>Balance:$300</b>
<p style={{fontSize:14}}>Making withdrawal is  easy. Just enter these details and withdraw</p>
<div>
<p style={{fontSize:14}} >Amount</p>
<input type="text" placeholder='$' className='balenc-inputt'/>
</div>
 

<button  className='balanc-button' > Withdraw</button>
<p onClick={openModal} style={{fontSize:12}}>Change Your Model</p>
</div>
      

{model && (
<form className='balance'>
    <div className=' balance2'>
    <div className=' balance1'>
    <img src={momo} className='balance-image'/>
        <div style={{fontSize:12}}>Account No<br/>
        5678987654
        </div>
    </div>
    <div>Balance:$300</div>
    </div>
<div className=' balance3' >
 <select className='balance-select'>
            <option style={{backgroundColor: 'black'}}>Paypal</option>
            <option>Bank transfer</option>
            <option>Visa Card</option>
            <option> MTN</option>
            <option>  AIRTEL</option>
        </select>
        <div className='balence-inputt'>
        <p style={{fontSize:12}}> Password: </p> 
        <input type="text" placeholder="Enter password" className='balence-input'/>
        </div>
        <div className='balence-inputt'>
        <p style={{fontSize:12}}>Conform Password:</p> 
        <input type="text" placeholder="Enter password" className='balence-input'/>
        </div>
        <button className='balance-button' onClick={handleSave}> Submit</button>
    </div>
        </form>
        )}

</div>
        
    )
}
export default Balance