import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import { Form, Container, Row,Col, FormGroup, Label, Input,Card,CardImg, ButtonToggle } from "reactstrap";
import '../App.css';
import Laptop from './laptop.jpeg';
class ResetPassword extends Component {
  
  render(){
  return (
    <Row>
    <Col sm="7" mr="0" ml="0"  style={{paddingRight:'0px',height:'800px',backgroundColor:"#133047"}}>
        <div className="thumbnail">
        <img src={Laptop} alt="/" style={{width:'772px',height:'700px',paddingTop:'50px',paddingLeft:'108px',paddingBottom:'50px',opacity:'0.5',boxShadow:'0 2px 4px 0 rgba(0,0,0,0.5)'}}/>
        </div>
    </Col>
    <Col sm="5"  mr="0" ml="0" style={{paddingLeft:'0px',height:'800px',backgroundColor:'#f4b41a',paddingTop:'50px'}}>
      <div className="Rectangle" style={{width:'400px',height:'600px',paddingRight:'100px',paddingBottom:'50px',boxShadow:'0 2px 4px 0 rgba(0,0,0,0.5)',backgroundColor:'#ffffff'}} >
         <h3 style={{height:'43px',width:'173px',paddingTop:'38px',paddingLeft:'55px',paddingBottom:'40px',fontSize:'bold',fontWeight:'600',color:'#131212',fontFamily:'Helvetica'}}> EveryULB</h3>
         <div className="subheading" style={{fontFamily:'Helvetica',fontSize:'15px',color:'#133047',lineHeight:'1.43',display:'flex',borderL:'4px solid #f4b41a',paddingLeft:'55px',borderLeft:'4px solid #f4b41a',paddingBottom:'18px'}}>Reset Password
            </div>
            <Form className="resetPasswordForm"  style={{paddingLeft:'55px',width:'350px',fontSize:'10px'}}>
                        <FormGroup className="resetPassword-formElements" >
                            
                            <Input 
                                type="password"
                                name="password"
                                placeholder="&nbsp;&nbsp;Password"
                            />
                             
                        </FormGroup>
                        <FormGroup className="resetPassword-formElements">
                            
                            <Input 
                                type="confirm_password"
                                name="confirm_password"
                                placeholder="&nbsp;&nbsp; Confirm Password"
                            />
                             
                        </FormGroup>
            </Form>
            <br></br>
            <div>
            <ButtonToggle color="warning" type="button" style={{position:'relative',bottom:'20px',borderRadius:'4px',width:'295px',height:'40px',fontWeight:'bold',fontSize:"14px",left:'55px',textAlign:"left"}}><NavLink exact to="/sign-in" style={{ textDecoration: 'none',color:'#133047'}}>&nbsp;&nbsp; Submit </NavLink> 
             </ButtonToggle>
             </div>
      </div>
    </Col>
  </Row>
    );
}
}
export default ResetPassword;