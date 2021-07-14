import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap';
import classnames from 'classnames';

function TabView(props){

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (val) => {
        setActiveTab(val);
    }

    return(
        <div className='tab-main'>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => toggle('1')}
                    >
                        RR/BF Table
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => toggle('2')}
                    >
                        Call/Put Table
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => toggle('3')}
                    >
                        Vol Curve
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => toggle('4')}
                    >
                        Vol Smile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => toggle('5')}
                    >
                        Heatmaps
                    </NavLink>
                </NavItem>                
            </Nav>
            <TabContent activeTab={activeTab} className='mt-3'>
                <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <Table borderless striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Exp Date</th>
                                    <th>ATM</th>
                                    <th>25d R/R</th>
                                    <th>10d R/R</th>
                                    <th>25d B/F</th>
                                    <th>10d B/F</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {props.tab1Data.length > 0 && props.tab1Data.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{item.time}</td>
                                        <td>{item.expDate}</td>
                                        <td>{item.ATM}</td>
                                        <td>{item.dr25}</td>
                                        <td>{item.dr10}</td>
                                        <td>{item.db25}</td>
                                        <td>{item.db10}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                    <Table borderless striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Exp Date</th>
                                    <th>ATM</th>
                                    <th>25d Call</th>
                                    <th>10d Call</th>
                                    <th>25d Put</th>
                                    <th>10d Put</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {props.tab2Data.length > 0 && props.tab2Data.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{item.time}</td>
                                        <td>{item.expDate}</td>
                                        <td>{item.ATM}</td>
                                        <td>{item.call25}</td>
                                        <td>{item.call10}</td>
                                        <td>{item.put25}</td>
                                        <td>{item.put10}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </Table>

                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="3">
                    <p>No data</p>
                </TabPane>
                <TabPane tabId="4">
                    <p>No data</p>
                </TabPane>
                <TabPane tabId="5">
                    <p>No data</p>
                </TabPane>
            </TabContent>
        </div>
    )
}
export default TabView;