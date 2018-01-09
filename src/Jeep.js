import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './Main.js';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle,CardSubtitle,CardImg, CardText, Row, Col,NavbarBrand } from 'reactstrap';
import classnames from 'classnames';
import './App.css'


export default class Jeep extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '0',
            page: '1'
        };

    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
                active: this.state.activeTab === tab
            });
        }
        else {
            this.setState({
                activeTab: '0'
            })
        }
        return false;
    }


    render() {
        return (
            <div>
            <header className='Top'>
                <Nav tabs className='Mid'>
                    <NavItem >
                        <img src='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/logo-jeep.png'
                             className='Img'/>
                    </NavItem>
                    <NavItem className={classnames({active: this.state.activeTab === '0'})}>
                    </NavItem>
                    <NavItem className={classnames({Tab:true , active: this.state.activeTab === '1'})}>
                        <NavLink href='#' className={classnames({NavRef: this.state.activeTab !== '1' ,active:this.state.activeTab === '1'})}
                                 onClick={() => this.toggle('1')}>
                            VEHICLES
                        </NavLink>
                    </NavItem>
                    <NavItem className={classnames({Tab:true , active: this.state.activeTab === '2'})}>
                        <NavLink  href='#' className={classnames({NavRef: this.state.activeTab !== '2' ,active:this.state.activeTab === '2'})}
                                  onClick={() => this.toggle('2')}>
                            SHOPPING TOOLS
                        </NavLink>
                    </NavItem>
                    <NavItem className={classnames({Tab:true , active: this.state.activeTab === '3'})}>
                        <NavLink href='#' className={classnames({NavRef: this.state.activeTab !== '3' ,active:this.state.activeTab === '3'})}
                                 onClick={() => this.toggle('3')}>
                            CAPABILITY
                        </NavLink>
                    </NavItem>
                    <NavItem className='Tab'>
                        <NavLink href='/JeepStuff' className='NavRef'>JEEP LIFE</NavLink>
                    </NavItem>
                    <NavItem className='Tab'>
                        <NavLink className={ classnames({active: this.state.activeTab === '5'})}
                                 onClick={() => this.toggle('5')}>
                            OWNERS
                        </NavLink>

                    </NavItem>

                </Nav>

                <TabContent className= 'Mid'  activeTab={this.state.activeTab}>
                    <TabPane tabId='0'>
                    <Main/>
                    </TabPane>
                    <JeepsTab/>
                    <TabPane tabId="2">
                    </TabPane>
                    <TabPane tabId='3'> </TabPane>
                    <TabPane tabId='5' />
                </TabContent>
            </header>
            </div>
        );
    }
}
class JeepsTab extends Component{

    render(){
        return(
            <TabPane tabId='1' className='Contents'>
                <div className="Section">
                    <h4 >STANDARD MODELS</h4>
                </div>
                <Row className='Rows'>
                    <JeepsCard link='/Wrangler' jeepName='ALL-NEW WRANGLER' description='UNMATCHED CAPABILITY'  cost='26,995' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Standard-Models/2018-Jeep-Global-Nav-Standard-Models-Wrangler-JL.jpg.image.300.jpg'  />
                    <JeepsCard link='/GrandCherokee' jeepName='GRAND CHEROKEE' description='THE MOST AWARDED SUV EVER' cost='30,595' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Standard-Models/2018-Jeep-Global-Nav-Standard-Models-Grand-Cherokee_ver01.jpg.image.300.jpg' />
                    <JeepsCard link='/Cherokee' jeepName='CHEROKEE' description='THE AWARD WINNER' cost='24,395' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Standard-Models/2018-Jeep-Global-Nav-Standard-Models-Cherokee_ver01.jpg.image.300.jpg'/>
                    <JeepsCard link='/Compass' jeepName='COMPASS' description='MODERN ADVENTURE' cost='20,995' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Standard-Models/2018-Jeep-Global-Nav-Standard-Models-Compass_ver01.jpg.image.300.jpg' />
                </Row>
                <Row className='Rows'>
                    <JeepsCard jeepName='RENAGADE' description='LIVE RENEGADE' cost='17,995' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Standard-Models/2018-Jeep-Global-Nav-Standard-Models-Renegade_ver01.jpg.image.300.jpg' />
                    <JeepsCard jeepName='WRANGLER JK' description='RUGGED YET REFINED' cost='23,995' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Standard-Models/2018-Jeep-Global-Nav-Standard-Models-Wrangler-JK-v2.jpg.image.300.jpg' />
                </Row>
                <div className="Section">
                    <h4 >LIMITED EDITION MODELS</h4>
                </div>
                <Row className='Rows'>
                    <JeepsCard jeepName='GRAND CHEROKEE' description='2 MODELS AVAILABLE' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Limited-Editions/2017-Jeep-Grand-Cherokee-GlobalNav-VehicleCard-Limitededition.jpg.image.300.jpg' />
                    <JeepsCard jeepName='CHEROKEE' description='3 MODELS AVAILABLE' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Limited-Editions/2018-Jeep-Global-Nav-Vehicle-Card-Limited-Edition-Cherokee.jpg.image.300.jpg' />
                    <JeepsCard jeepName='RENEGADE' description='2 MODELS AVAILABLE' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Limited-Editions/2017-Jeep-Renegade-GlobalNav-VehicleCard-Limitededition.jpg.image.300.jpg' />
                    <JeepsCard jeepName='WRANGLER UNLIMITED' description='8 MODELS AVAILABLE' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Limited-Editions/2017-Jeep-Wrangler-Unlimited-GlobalNav-VehicleCard-Limitededition.jpg.image.300.jpg' />
                </Row>
                <Row className='Rows' >
                    <JeepsCard jeepName='WRANGLER' description='8 MODELS AVAILABLE' image='https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/global/header/Vehicles/Limited-Editions/2017-Jeep-Wrangler-GlobalNav-VehicleCard-Limitededition.jpg.image.300.jpg'/>
                </Row>


            </TabPane>

        );
    }
}

class JeepsCard extends Component{


    Cost(){
        if(this.props.cost === undefined)
        {
            return
        }
        if(this.props.cost !== null || this.props.cost !== '' )
        {
            return(
                <div>
                    <CardSubtitle className='CardSub2'>MSRP STARTING AT</CardSubtitle>
                    <CardSubtitle className='Cost'>${this.props.cost}</CardSubtitle>
                </div>
                                );
        }
    }
    render(){
        return(
        <Col md='3' onClick={()=> window.location = this.props.link}>
            <NavLink className='CardContents' href={this.props.link}>
                    <CardImg className='Img' src={this.props.image}/>
                <div>
                <CardTitle className='CardTitle'>
                        {this.props.jeepName}
                    </CardTitle>
                <CardSubtitle className='CardSub1'>{this.props.description}</CardSubtitle>
                    {this.Cost()}
                </div>
            </NavLink>
        </Col>
        );
    }
}


