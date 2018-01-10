import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import JeepsTab from './JeepTab';
import Main from './Main.js';
import ShoppingTools from './ShoppingTools';
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
            <div class="MainDiv">
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
                        <ShoppingTools />
                    </TabPane>
                    <TabPane tabId='3'> </TabPane>
                    <TabPane tabId='5' />
                </TabContent>
            </header>
            </div>
        );
    }
}




