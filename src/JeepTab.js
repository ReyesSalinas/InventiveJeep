import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle,CardSubtitle,CardImg, CardText, Row, Col,NavbarBrand } from 'reactstrap';
import classnames from 'classnames';
import './App.css'


export default class JeepsTab extends Component{

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

export class JeepsCard extends Component{
    constructor(props){
        super(props);

    }


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

    GetSize(){
        if(this.props.size === undefined)
        {
            return 3;
        }

        return this.props.size;
    }



    render(){
        return(
            <Col md={this.GetSize()} onClick={()=> window.location = this.props.link}>
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


