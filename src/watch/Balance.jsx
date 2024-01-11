import "../watch/Balance.css";
import momo from "../images/image1.png";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MyContext } from "../context/Context";

function Balance({ closeModal }) {
  const { Singleusertracking = {} } = MyContext();
  const [model, setModel] = useState(false);

  const amount = Singleusertracking?.Your_tracks?.[0]?.Amount;
  console.log("Amount:", amount);

  function openModal() {
    setModel(!model);
  }

  const handleSave = () => {
    onSave();
    onClose();
  };
  return (
    <div className="balances">
      <button className="closeModal" onClick={closeModal}>
        <IoMdCloseCircleOutline style={{ fontSize: "2rem", border: "none" }} />
      </button>
      <div className="content">
        <div className="withdescr">
          <h1>Balance: {amount} Rwf</h1>
          <p className="withdInfo">
            Making withdrawal is easy. Just enter these details and <br />
            withdraw. Make sure the Payment method you used when <br /> creating
            account is still working. Otherwise contact admin
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Amount to Withdraw"
            className="balenc-inputt"
          />
        </div>

        <button className="balanc-button"> Withdraw</button>
        {/* <p onClick={openModal} style={{ fontSize: 12 }}>
          Change Your Model
        </p> */}
      </div>

      {model && (
        <form className="balance">
          <div className=" balance2">
            <div className=" balance1">
              <img src={momo} className="balance-image" />
              <div style={{ fontSize: 12 }}>
                Account No
                <br />
                5678987654
              </div>
            </div>
            <div>Balance:$300</div>
          </div>
          <div className=" balance3">
            <select className="balance-select">
              <option style={{ backgroundColor: "black" }}>Paypal</option>
              <option>Bank transfer</option>
              <option>Visa Card</option>
              <option> MTN</option>
              <option> AIRTEL</option>
            </select>
            <div className="balence-inputt">
              <p style={{ fontSize: 12 }}> Password: </p>
              <input
                type="text"
                placeholder="Enter password"
                className="balence-input"
              />
            </div>
            <div className="balence-inputt">
              <p style={{ fontSize: 12 }}>Conform Password:</p>
              <input
                type="text"
                placeholder="Enter password"
                className="balence-input"
              />
            </div>
            <button className="balance-button" onClick={handleSave}>
              {" "}
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
export default Balance;
