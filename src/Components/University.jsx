import React from "react";
import { Button, Form, Alert } from "react-bootstrap";
import pic from "./images/university.png";
//Used for redirecting
import { useNavigate } from "react-router-dom";
// import NavBar from "./Navbar";

function User() {
//   const navigate = useNavigate();
//   const [isLogin,setIsLogin]=React.useState(false);
//   const [fullBankDetail,setFullBankDetail]=React.useState({
//     acNo:"",
//     certiNo:"",
//     acHolder:"",
//     custId:"",
//     jointAcHolder:"",
//     jointCustId:"",
//     bankNameAdd:"",
//     amount:"",
//     DOI:"",
//     DOM:"",
//     ROI:"",
//     typeAc:"",
//     nominee:""
//   });

//   React.useEffect(() =>{
//     checkLogin();
//   },[])

//   function checkLogin(){
//     if(localStorage.getItem('user')===null){
//         setIsLogin(false);
//         navigate("/logout");
//     }else{
//         setIsLogin(true);
//     }
//   }
//   //Joint ke liye
//   const [isChecked,setIsChecked]=React.useState(false);

//   //Nomination
//   const [isNom,setIsNom]=React.useState(false);

//   function handleCheckBoxChange(){
//     setIsChecked(!isChecked);
//   }

//   function handleIsNom(){
//     setIsNom(!isNom);
//   }
//   function handleChange(event){
//     const name=event.target.name;
//     const value=event.target.value;
    
//     setFullBankDetail({
//       ...fullBankDetail,
//       [name]:value
//     });
    
//   }

//   function handleSubmit(event){

//     event.preventDefault();
//     fetch("http://localhost:3001/api",{
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         acNo:fullBankDetail.acNo ,
//         certiNo:fullBankDetail.certiNo ,
//         acHolder:fullBankDetail.acHolder ,
//         custId:fullBankDetail.custId,
//         jointAcHolder:fullBankDetail.jointAcHolder,
//         jointCustId:fullBankDetail.jointCustId,
//         bankNameAdd: fullBankDetail.bankNameAdd,
//         amount:fullBankDetail.amount,
//         DOI:fullBankDetail.DOI,
//         DOM:fullBankDetail.DOM,
//         ROI:fullBankDetail.ROI,
//         typeAc:fullBankDetail.typeAc,
//         nominee:fullBankDetail.nominee
//         })
//     }).then(response => response.json())
//     .then((result) => {
//       if(result.data===0){
//         alert("A record with this account number already exists!");
//       }else{
//         navigate("/view");
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

//     //Clearing Data after submitting it to server
//     setFullBankDetail({
//       acNo:"",
//       certiNo:"",
//       acHolder:"",
//       custId:"",
//       jointAcHolder:"",
//       jointCustId:"",
//       bankNameAdd:"",
//       amount:"",
//       DOI:"",
//       DOM:"",
//       ROI:"",
//       typeAc:"",
//       nominee:""
//     });
//   }

  return (
    <div>
    <div className="row">
     {/* {isLogin===true && (<div><NavBar /> 
     <Form className="formalign normalBackground animate__animated animate__fadeIn" onSubmit={handleSubmit}>
      <h2 className="formTitle">Account Details</h2>
      <hr></hr>
      <div className="row">
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formBasicAcNo">
        <Form.Label className="field">Account Number</Form.Label>
        <Form.Control className="inputData" name="acNo" type="text" value={fullBankDetail.acNo} placeholder="Enter Account Details" onChange={handleChange} required={true}/>
      </Form.Group>
      </div> 
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formBasicCertiNo">
        <Form.Label className="field">Certificate Number</Form.Label>
        <Form.Control  className="inputData" name="certiNo" type="text" value={fullBankDetail.certiNo} placeholder="Enter Certificate Number" onChange={handleChange} required={true}/>
      </Form.Group>
      </div> 
      </div>

      <div className="row">
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formBasicAcHolder">
        <Form.Label className="field">Account Holder Name</Form.Label>
        <Form.Control className="inputData" name="acHolder" type="text" value={fullBankDetail.acHolder} placeholder="Enter Account Holder Name" onChange={handleChange} required={true}/>
      </Form.Group>
      </div> 
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formBasicCustId">
        <Form.Label className="field">Customer Id</Form.Label>
        <Form.Control className="inputData" name="custId" type="text" value={fullBankDetail.custId} placeholder="Enter Customer Id" onChange={handleChange} required={true}/>
      </Form.Group>
      </div> 
      </div>

      <Form.Group className="mb-3" controlId="formBasicJoint">
        <Form.Check className="field" type="checkbox" label="Joint Account?" onChange={handleCheckBoxChange} />
      </Form.Group>

      {isChecked && (<div className="row">
      <div className="col m6"><Form.Group className="mb-3" controlId="formBasicJointAcHolder">
        <Form.Label className="field">Joint Account Holder Name</Form.Label>
        <Form.Control className="inputData" name="jointAcHolder" type="text" value={fullBankDetail.jointAcHolder} placeholder="Enter Joint Account Holder Name" onChange={handleChange} required={true} />
      </Form.Group>
      </div> 
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formBasicJointCustId">
        <Form.Label className="field">Joint Customer Id</Form.Label>
        <Form.Control className="inputData" name="jointCustId" type="text" value={fullBankDetail.jointCustId} placeholder="Enter Joint Customer Id" onChange={handleChange} required={true} />
      </Form.Group></div></div>)}

      <div className="row">
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formBankName">
        <Form.Label className="field">Bank Name/Address</Form.Label>
        <Form.Control className="inputData" name="bankNameAdd" type="text" value={fullBankDetail.bankNameAdd} placeholder="Enter Bank Name And Address" onChange={handleChange} required={true}/>
      </Form.Group>
      </div>
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formAmount">
        <Form.Label className="field">Initial Amount</Form.Label>
        <Form.Control className="inputData" name="amount" type="text" value={fullBankDetail.amount} placeholder="Enter Initial Amount" onChange={handleChange} required={true}/>
      </Form.Group>
      </div>
      </div>

      <div className="row">
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formDOI">
        <Form.Label className="field">Date Of Issue</Form.Label>
        <Form.Control className="inputData" name="DOI" type="date" value={fullBankDetail.DOI} placeholder="Enter Date Of Issue" onChange={handleChange} required={true}/>
      </Form.Group>
      </div>
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formDOM">
        <Form.Label className="field">Date Of Maturity</Form.Label>
        <Form.Control className="inputData" name="DOM" type="date" value={fullBankDetail.DOM} placeholder="Enter Date Of Maturity" onChange={handleChange} required={true}/>
      </Form.Group>
      </div>
      </div>

      <div className="row">
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formROI">
        <Form.Label className="field">Rate Of Interest</Form.Label>
        <Form.Control className="inputData" name="ROI" type="text" value={fullBankDetail.ROI} placeholder="Enter Rate Of Interest" onChange={handleChange} required={true}/>
      </Form.Group>
      </div>
      <div className="col m6">
      <Form.Group className="mb-3" controlId="formTypeAc">
        <Form.Label className="field">Type Of Account</Form.Label>
        <Form.Control className="inputData" name="typeAc" type="text" value={fullBankDetail.typeAc} placeholder="Enter Type Of Account" onChange={handleChange} required={true}/>
      </Form.Group>
      </div>
      </div>
      <Form.Group className="mb-3" controlId="formBasicNominee">
        <Form.Check className="field" type="checkbox" label="Nomination?" onChange={handleIsNom} />
      </Form.Group>
      
      {isNom && 
      <Form.Group className="mb-3" controlId="formBasicNominee">
        <Form.Label className="field">Nominee Name</Form.Label>
        <Form.Control className="inputData" name="nominee" type="text" value={fullBankDetail.nominee} placeholder="Enter Nominee Name" onChange={handleChange} required={true}/>
      </Form.Group>}

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form></div>)}
    </div>  */}
    <div className="col m6">
    <img src={pic} height={600} width={600}></img>
    </div>
      <div className="col m6">
    <Form className="formalign normalBackground animate__animated animate__fadeIn">
      <h2 className="university">University Registration</h2>
      <hr></hr>
      
      <Form.Group className="mb-3" controlId="formBasicAcNo">
        <Form.Label className="field">Email</Form.Label>
        <Form.Control className="inputData" name="acNo" type="email" placeholder="Enter Email" required={true}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCertiNo">
        <Form.Label className="field">Name Of University</Form.Label>
        <Form.Control  className="inputData" name="name" type="text" placeholder="Enter Name Of University" required={true}/>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="Password">
            <Form.Label className="field">Password</Form.Label>
            <Form.Control  className="inputData" name="password" type="password" placeholder="Enter Password" required={true} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label className="field">Confirm Password</Form.Label>
            <Form.Control className="inputData" name="confirmPassword" type="password" placeholder="Confirm Password" required={true}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicJointCustId">
        <Form.Label className="field">State</Form.Label>
        <Form.Control className="inputData" name="jointCustId" type="text" placeholder="Enter State" required={true} />
      </Form.Group>

      <button className="button button1" type="button">Submit</button>
    </Form>
    </div>
    </div>
    </div>
  );
}

export default User;
