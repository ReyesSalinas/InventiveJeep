import React,{Component} from 'react';
import {Nav,Navbar,NavLink,Card,Col,Row,CardImg,CardSubtitle} from 'reactstrap';
import './App.css';


export default class ShoppingToolsTab extends Component{
    render(){
        return(
            <div className='Shopping'>
                <div className='ShoppingRow'>
                    <LinkPanelGallery />
                </div >


                    <LinkPanels />

            </div>

        );
    }
}


class LinkPanelGallery extends Component{
    render(){
    return(
        <div className='LinkPanelRow'>
            <Row className='LinkPanelCenter' >
                <LinkPanelCard image='https://freeiconshop.com/wp-content/uploads/edd/wrench-solid.png' title='BUILD & PRICE'/>
                <LinkPanelCard image='https://www.shareicon.net/data/128x128/2015/09/26/107755_find_512x512.png' title='SEARCH NEW INVENTORY'/>
                <LinkPanelCard image='https://freeiconshop.com/wp-content/uploads/edd/location-pin-curvy-solid.png' title='FIND A DEALER'  />
                <LinkPanelCard image='https://www.shareicon.net/data/128x128/2017/07/08/888207_chip_512x512.png' title='VIEW INCENTIVE & OFFERS' />

            </Row>
        </div>
    );
    }
}

class LinkPanelCard extends Component{
    render(){
        return(

            <Col md='3' >
                <NavLink >
                    <CardImg  className='Glyphicon' src={this.props.image}/>
                    <div className='PanelSub'>
                    <CardSubtitle className='HeaderCenter'>{this.props.title}</CardSubtitle>
                    </div>
                </NavLink>

            </Col>
        );
    }
}



class LinkPanels extends Component{

    render(){
        return(
            <div className='LinkPanelRow'>
            <Row >
                <Col md='4'>
                    <Nav navbar className='LinkPanelRight' >
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                    </Nav>
                </Col>
                <Col md='4' className='LinkPanelCenter'>
                    <Nav navbar>
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                        <LinkPanelRow />
                    </Nav>
                </Col>
                <Col md='4' className='LinkPanelLeft'>
                    <Nav navbar>
                    <LinkPanelRow />
                    <LinkPanelRow />
                    <LinkPanelRow />
                    <LinkPanelRow />
                    <LinkPanelRow />
                    <LinkPanelRow />
                    </Nav>
                </Col>
            </Row>
            </div>
        );
    }
}

class LinkPanelRow extends Component{
    render(){
        return(
            <NavLink href='/GO'>PlaceHolder</NavLink>
        );
    }
}