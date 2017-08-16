import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCFooter extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <Row>
                <Col span={2}></Col>
                <Col span={20} className="footer">
                    &copy;&nbsp; 2017 CollabHero testing using. All Rights Reserved.
                </Col>
                <Col span={2}></Col>
            </Row>
        );
    }
}