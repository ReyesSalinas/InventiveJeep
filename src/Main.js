import React, { Component } from 'react';

import JeepCarousel from './JeepCarousel';
import {Row,Col,Nav,NavLink,NavbarBrand,Navbar,NavItem,Collapse,Card,CardSubtitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {JeepsCard} from "./JeepTab";
import './App.css'


export default class JeepMain extends Component{

    render(){

        return(
            <div className='MainDiv'>
                <JeepCarousel />
                <MainBody />
                <SiteMap />
                <OuterFooter />

            </div>
        );


    }
}

class MainBody extends Component
{
    render(){
        return(
            <div className="OuterBody">
                <div className="InnerBody Fit">
                    <CardGallery />
                    <JeepGallery />
                    <InnerFooter />
                </div>
                <FooterNavBar />
            </div>

        );
    }
}


class FooterNavBar extends Component{
     render(){
         return(
             <Navbar className='Center Center-Vertical FooterNav'>
                 <NavLink href='Link' className='NavLink'>Links</NavLink>
                 <NavLink href='Link' className='NavLink'>Links</NavLink>
                 <NavLink href='Link' className='NavLink'>Links</NavLink>
                 <NavLink href='Link' className='NavLink'>Links</NavLink>
                 <NavLink href='Link' className='NavLink'>Links</NavLink>
                 <NavItem>
                    <input/>
                 </NavItem>
             </Navbar>
         );
     }
}
class CardGallery extends Component{
    render(){
        return(
            <Row className='CardGallery'>
                <ImageCard image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/promo/2019-Jeep-Cherokee-BHP-Promotile-Phase1.jpg.image.500.jpg'/>
                <ImageCard image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/promo/JEEP%20_%202018%20_%20Grand%20Cherokee%20_%20PromoTIle%20_%20Winter%20Hero%20Slider%20Update.jpg.image.500.jpg' />
                <ImageCard image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/promo/JEEP%20_%202018%20_%20Compass%20_%20PromoTile%20_%20Winter%20Hero%20Slider%20Update.jpg.image.500.jpg' />
                <ImageCard image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/promo/2018-Jeep-BHP-Promotile-Wrangler-JL.jpg.image.500.jpg' />
            </Row>
        );
    }
}

class ImageCard extends Component{
    render(){
        return(
            <Col md='3' className='GalleryCard' >
                <Card  >
                    <img className='Img' src={this.props.image}/>
                    <div className='CardFooter'><NavLink href={this.props.link} className='Right'>{this.props.cardFooter}<span className='Arrow'> > </span></NavLink></div>
                </Card>

            </Col>

        );
    }
}
class JeepGallery extends Component{
    render(){
        return (
            <div className='Gallery'>
                <h4 className='HeaderCenter'>JEEP VEHICLES</h4>
                <Row >
                    <JeepsCard size='2' link='/AllNewWrangler' jeepName='ALL-NEW WRANGLER' description='' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/2018-Jeep-BHP-Jeep-Vehicles-All-New-Wrangler-JL-v2.jpg.image.500.jpg'/>
                    <JeepsCard size='2' link='/GRANDCHEROKEE' jeepName='GRAND CHEROKEE' description='' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/2018-Jeep-BHP-Jeep-Vehicles-Grand-Cherokee-v2.jpg.image.500.jpg'/>
                    <JeepsCard size='2' link='/CHEROKEE' jeepName='CHEROKEE' description='' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/2018-Jeep-BHP-Jeep-Vehicles-Cherokee-v2.jpg.image.500.jpg'/>
                    <JeepsCard size='2' link='/COMPASS' jeepName='COMPASS' description='' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/2018-Jeep-BHP-Jeep-Vehicles-Compass-v2.jpg.image.500.jpg'/>
                    <JeepsCard size='2' link='/RENEGADE' jeepName='RENEGADE' description='' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/2018-Jeep-BHP-Jeep-Vehicles-Renegade-v2.jpg.image.500.jpg'/>
                    <JeepsCard size='2' link='/WRANGLERJK' jeepName='WRANGLER JK'  image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/lineup/2018-Jeep-BHP-Jeep-Vehicles-Wrangler-JK-v2.jpg.image.500.jpg'/>

                </Row>
            </div>
        );
    }
}

class SiteMap extends Component{
    render(){
        return(
          <div className='SiteMap Center'>
              <Row >
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
                          <NavItem className='ColHeader'>Support</NavItem>
                          <SiteMapLink name='Unconnect' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/footer/Uconnect-80px.png'/>
                          <SiteMapLink name='Serious' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/footer/footer-siriusxm-new.png' />


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
        if(this.props.image !== undefined)
        {
            return(<NavLink className='NavLink' href={this.props.name}><img src={this.props.image}/></NavLink>);
        }
        return(
            <NavLink className='NavLink' href={this.props.name}>{this.props.name}</NavLink>
        );
    }
}

class InnerFooter extends Component{
    render(){
        return(
            <div className='Center Center-Vertical'>
              <Row>
                  <Col md='2'>
                      <img src='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/badge/2017-Jeep-BHP-Kelly-Blue-Book-Badge.png.image.150.png'/>
                  </Col>
                  <Col md='8' className='Center-Vertical'>
                      <div >
                        <h4>THIS IS THE TITLE</h4>
                          More words because why not?
                          <br/>
                          Might as well do more
                      </div>
                      <NavLink className='BlackLink' href='/LearnMore'>LearnMore<span className='Arrow'> > </span></NavLink>
                  </Col>
              </Row>
            </div>
        );
    }
}

class OuterFooter extends Component{

    render(){
        return(
            <div className='Footer Center'>
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






