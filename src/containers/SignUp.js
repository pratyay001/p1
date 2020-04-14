import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import { Form, Container, Row,Col, FormGroup, Label, Input,Card,CardImg,ButtonToggle } from "reactstrap";
import Laptop from './laptop.jpeg';
class SignUp extends Component {
    
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
      <div className="Title-Copy">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <NavLink to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" style={{fontSize:'14px',color:'#0e2536',textDecoration:'none', borderBottom: '3px solid #f4b41a',marginLeft:'0',paddingBottom:'14px'}}>Sign Up</NavLink>
               &nbsp;&nbsp;&nbsp;
               <NavLink exact to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" style={{color: '#666666',fontSize:'14px',textDecoration:'none'}} >Sign In</NavLink> 
               <NavLink exact to="/forgot" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" style={{fontSize:'14px',color: '#666666',textDecoration:'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot</NavLink>
      </div>
      <br></br>
      <Form className="resetPasswordForm"  style={{paddingLeft:'55px',width:'350px',fontSize:'10px'}}>
                        <FormGroup className="resetPassword-formElements" >
                        <label for="validationServer02"></label>
                            <Input 
                                type="Full_name" 
                                name="full_name"
                                placeholder="&nbsp;&nbsp;Full Name"
                            />
                        </FormGroup>
                        <FormGroup className="resetPassword-formElements">
                        <label for="validationServer02"></label>
                            <Input 
                                type="organisation_name" 
                                name="organisation_name"
                                placeholder="&nbsp; Organisation Name"
                            />
                            
                        </FormGroup>
                        <FormGroup className="resetPassword-formElements">
                <label for="validationServerUsername"></label>

                        <Input type="text" name="organisation_name"  placeholder="Email" />
                    
                        </FormGroup>
                        <FormGroup className="resetPassword-formElements">
                            
                            <Input 
                                type="password"
                                name="password"
                                placeholder="&nbsp;&nbsp; Password"
                            />
                            
                        </FormGroup>
                        <FormGroup className="resetPassword-formElements">
                            
                            <Input 
                                type="conf_password"
                                name="conf_password"
                                placeholder="&nbsp;&nbsp;Confirm Password"
                            />
                             <br></br>
                             <br></br>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col span="12" style={{paddingLeft:'35px',fontSize:'12px',display:'flexs',fontWeight:'normal',color:'#999999',position:'relative',bottom:'40px'}}>
                                    <Input 
                                        type="checkbox"
                                        name="rememberMe"
                                    />  I have read the <Link to="/terms-conditions" style={{textDecoration:'none',color:'#f4b41a'}}>Terms & Conditions</Link>
                                </Col>
                            </Row>
                        </FormGroup>
            </Form>  
            <div>
            <ButtonToggle color="warning" type="button" style={{position:'relative',bottom:'20px',borderRadius:'4px',width:'295px',height:'40px',fontWeight:'bold',fontSize:"14px",left:'55px',textAlign:"center"}}><NavLink exact to="/sign-in" style={{ textDecoration: 'none',color:'#133047'}}>&nbsp;&nbsp; Sign Up </NavLink> 
             </ButtonToggle>
             </div>
      </div>
    </Col>
  </Row>
    );
}
}
export default SignUp;
