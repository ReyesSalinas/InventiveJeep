import React, { Component } from 'react';

import JeepCarousel from './JeepCarousel';
import {Row,Col,Nav,NavLink,NavbarBrand,Navbar,NavItem,Collapse} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


export default class Main extends Component{

    render(){

        return(
            <div>
                <JeepCarousel />

                <SiteMap />
                <Footer />

            </div>
        );


    }
}

class SiteMap extends Component{
    render(){
        return(
          <div className='SiteMap'>
              <Row>
              <Col md='2'>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                      <Nav className='ColHeader'>VEHICLES</Nav>
                      <SiteMapLink name='Wrangler'/>
                      <SiteMapLink name='Grand Cherokee'/>
                      <SiteMapLink name='Cherokee'/>
                      <SiteMapLink name='Renegade'/>
                      <SiteMapLink name='Wrangler JK'/>
                      <SiteMapLink name='Compass'/>
                      </Nav>
                  </Row>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                      <NavItem className='ColHeader'>COST</NavItem>
                      <SiteMapLink name='View Incentives & Offers'/>
                      <SiteMapLink name='Military Bonus Cash'/>
                      <SiteMapLink name='Calculate Payment'/>
                      <SiteMapLink name='Find Your Trade-In Value'/>
                      <SiteMapLink name='Get a Quote'/>
                      <SiteMapLink name='Apply for Credit'/>
                      <SiteMapLink name='Get PreQualified'/>
                      </Nav>
                  </Row>
              </Col>
              <Col md='2'>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <Nav className='ColHeader'>VEHICLES</Nav>
                          <SiteMapLink name='Wrangler'/>
                          <SiteMapLink name='Grand Cherokee'/>
                          <SiteMapLink name='Cherokee'/>
                          <SiteMapLink name='Renegade'/>
                          <SiteMapLink name='Wrangler JK'/>
                          <SiteMapLink name='Compass'/>
                      </Nav>
                  </Row>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <NavItem className='ColHeader'>COST</NavItem>
                          <SiteMapLink name='View Incentives & Offers'/>
                          <SiteMapLink name='Military Bonus Cash'/>
                          <SiteMapLink name='Calculate Payment'/>
                          <SiteMapLink name='Find Your Trade-In Value'/>
                          <SiteMapLink name='Get a Quote'/>
                          <SiteMapLink name='Apply for Credit'/>
                          <SiteMapLink name='Get PreQualified'/>
                      </Nav>
                  </Row>
              </Col>
              <Col md='2'>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <Nav className='ColHeader'>VEHICLES</Nav>
                          <SiteMapLink name='Wrangler'/>
                          <SiteMapLink name='Grand Cherokee'/>
                          <SiteMapLink name='Cherokee'/>
                          <SiteMapLink name='Renegade'/>
                          <SiteMapLink name='Wrangler JK'/>
                          <SiteMapLink name='Compass'/>
                      </Nav>
                  </Row>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <NavItem className='ColHeader'>COST</NavItem>
                          <SiteMapLink name='View Incentives & Offers'/>
                          <SiteMapLink name='Military Bonus Cash'/>
                          <SiteMapLink name='Calculate Payment'/>
                          <SiteMapLink name='Find Your Trade-In Value'/>
                          <SiteMapLink name='Get a Quote'/>
                          <SiteMapLink name='Apply for Credit'/>
                          <SiteMapLink name='Get PreQualified'/>
                      </Nav>
                  </Row>
              </Col>
              <Col md='2'>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <Nav className='ColHeader'>VEHICLES</Nav>
                          <SiteMapLink name='Wrangler'/>
                          <SiteMapLink name='Grand Cherokee'/>
                          <SiteMapLink name='Cherokee'/>
                          <SiteMapLink name='Renegade'/>
                          <SiteMapLink name='Wrangler JK'/>
                          <SiteMapLink name='Compass'/>
                      </Nav>
                  </Row>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <NavItem className='ColHeader'>COST</NavItem>
                          <SiteMapLink name='View Incentives & Offers'/>
                          <SiteMapLink name='Military Bonus Cash'/>
                          <SiteMapLink name='Calculate Payment'/>
                          <SiteMapLink name='Find Your Trade-In Value'/>
                          <SiteMapLink name='Get a Quote'/>
                          <SiteMapLink name='Apply for Credit'/>
                          <SiteMapLink name='Get PreQualified'/>
                      </Nav>
                  </Row>
              </Col>
              <Col md='2'>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <Nav className='ColHeader'>VEHICLES</Nav>
                          <SiteMapLink name='Wrangler'/>
                          <SiteMapLink name='Grand Cherokee'/>
                          <SiteMapLink name='Cherokee'/>
                          <SiteMapLink name='Renegade'/>
                          <SiteMapLink name='Wrangler JK'/>
                          <SiteMapLink name='Compass'/>
                      </Nav>
                  </Row>
                  <Row className='SiteMapCol'>
                      <Nav navbar>
                          <NavItem className='ColHeader'>COST</NavItem>
                          <SiteMapLink name='View Incentives & Offers'/>
                          <SiteMapLink name='Military Bonus Cash'/>
                          <SiteMapLink name='Calculate Payment'/>
                          <SiteMapLink name='Find Your Trade-In Value'/>
                          <SiteMapLink name='Get a Quote'/>
                          <SiteMapLink name='Apply for Credit'/>
                          <SiteMapLink name='Get PreQualified'/>
                      </Nav>
                  </Row>
              </Col>
              </Row>
          </div>
        );
    }
}

class SiteMapLink extends  Component{
    render(){
        return(
            <NavLink className='NavLink' href={this.props.name}>{this.props.name}</NavLink>
        );
    }
}
class Footer extends Component{

    render(){
        return(
            <div className='Footer'>
                <FooterContent />
            </div>
        );
    }
}

class FooterContent extends Component{
    render(){
        return(
            <div >
                <FooterNavbar />
                <div className='Legal'>
                    ©2018 FCA US LLC. All Rights Reserved.<br/>
                    Chrysler, Dodge, Jeep, Ram, Mopar and SRT are registered trademarks of FCA US LLC.<br/>
                    ALFA ROMEO and FIAT are registered trademarks of FCA Group Marketing S.p.A., used with permission.<br/>
                    <br/>
                    *MSRP excludes destination, taxes, title and registration fees. Starting at price refers to the base model, optional equipment not included. A more expensive model may be shown. Pricing and offers may change at any time without notification. To get full pricing details, see your dealer.<br/>
                    <br/>
                    FCA strives to ensure that its website is accessible to individuals with disabilities. Should you encounter an issue accessing any content on www.jeep.com, please contact our Customer Service Team at www.jeep.com/webselfservice/ or 1-877-IAMJEEP, for further assistance or to report a problem. Access to www.jeep.com is subject to FCA’s Privacy Policy and Terms of Use.<br/>
                </div>
            </div>

        );
    }

}

class FooterNavbar extends Component{


    render(){
        return (
            <Navbar  expand='md' >
                <NavLink href='/FCA'>
                    <img src='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/footer/FCA.png'/>
                </NavLink>
                <NavLink href='/Chrysler'>
                    <img src='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/footer/FCA.png'/>
                </NavLink>
                    <Nav className='ml-auto ' navbar>
                        <FooterNavLink text='CHRYSLER' />
                        <FooterNavLink text='DODGE' />
                        <FooterNavLink text='JEEP' />
                        <FooterNavLink text='RAM' />
                        <FooterNavLink text='MOPAR' />
                        <FooterNavLink text='SRT' />
                        <FooterNavLink text='FIAT' />
                        <FooterNavLink text='ALFA ROMEO' />
                    </Nav>

            </Navbar>
        );
    }
}

class FooterNavLink extends Component{

    tag = '/'+this.props.text;
    render(){
        return(
            <NavItem >
                <NavLink className='NavLink' href={this.tag}>{this.props.text}</NavLink>
            </NavItem>
        );
    }
}






