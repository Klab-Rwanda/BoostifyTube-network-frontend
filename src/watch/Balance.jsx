import '../watch/Balance.css'
import momo from '../images/image1.png'
function Balance(){
    return(
        
< div className='balances'>




<div  className='balanc'>
<b>Balance:$300</b>
<p>Making withdrawal is  easy. Just enter these details and withdraw</p>
<div>
<p>Amount</p>
<input type="text" placeholder='$' className='balenc-inputt'/>
</div>
 

<button  className='balanc-button'> Withdraw</button>
</div>
      


<div  className='balance'>
    <div className=' balance2'>
    <div className=' balance1'>
    <img src={momo} className='balance-image'/>
        <div>Account No<br/>
        5678987654
        </div>
    </div>
    <div>balnce: $300</div>
    </div>
<div className=' balance3' >
 <select className='balance-select'>
            <option>Paypal</option>
            <option>Bank transfer</option>
            <option>Visa Card</option>
            <option> MTN</option>
            <option>  AIRTEL</option>
        </select>
        <div className='balence-inputt'>
        <p>Password: </p> 
        <input type="text" placeholder="Enter password" className='balence-input'/>
        </div>
        <div className='balence-inputt'>
        <p>Conform Password:</p> 
        <input type="text" placeholder="Enter password" className='balence-input'/>
        </div>
        <button className='balance-button'> Submit</button>
    </div>
        </div>

</div>
        
    )
}
export default Balance