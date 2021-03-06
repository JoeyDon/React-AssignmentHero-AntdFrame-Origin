import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Row, Col, Tabs, message, Form, Button, Checkbox, Modal,Input } from 'antd';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class PCHeader extends React.Component{

    constructor(){
        super();

        this.state = {
            current : 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        };
    }


    setModalVisible(value){
        this.setState({modalVisible: value})
    };

    handleClick(e){
        if (e.key == "register") {
            this.setState({current:'register'});
            this.setModalVisible(true);
        }
        else {
            this.setState({current:e.key})
        }
    };

    handleSubmit(e){
      //API
    };

    render(){
        let  {getFieldProps} = this.props.form;
        const { getFieldDecorator } = this.props.form;


        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" className="register">
                <button type="primary" htmlType="button">{this.state.userNickName}</button>
                &nbsp;&nbsp;
                <Link target="_blank">
                    <button type="dashed" htmlType="button">userpage</button>
                </Link>
                &nbsp;&nbsp;
                <button type="ghost" htmlType="button" >exit</button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register textInNav">

                Sign up/log in

            </Menu.Item>;
        return(
            <div>
                <Row className="topNavigator">
                    <Col span={12}>
                        <a href="/" className="logo">
                            <img src="./src/img/logo.png" alt="logo"/>

                        </a>
                    </Col>

                    <Col span={12}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} className="headMenu">
                            <Menu.Item key="top" className="textInNav">
                                About us
                            </Menu.Item>
                            <Menu.Item key="gap1" className="gapInNav">
                            </Menu.Item>
                            <Menu.Item key="social" className="textInNav">
                                How it works
                            </Menu.Item>
                            <Menu.Item key="gap2" className="gapInNav">
                            </Menu.Item>
                            <Menu.Item key="domestic" className="textInNav">
                                Contact us
                            </Menu.Item>
                            <Menu.Item key="gap3" className="gapInNav">
                            </Menu.Item>
                            {userShow}

                        </Menu>

                        <Modal title="User" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText = "Close">
                            <Tabs type="card">
                                <TabPane tab="Register page" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)} className="form">
                                            <FormItem>
                                            <Input prefix={<Icon type="user"/>} placeholder="username" {...getFieldProps('r_userName')} className="username"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Input prefix={<Icon type="lock"/>} placeholder="password" type="password" {...getFieldProps('r_password')} className="password"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Input prefix={<Icon type="lock"/>} placeholder="confirm password" type="password" {...getFieldProps('comfirmPassword')} className="confirmPassword"></Input>
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">Register</Button>

                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                </Row>

                <div className="headLabel1">
                    Find inspiration to smash your Assignments
                </div>

                <div className="headLabel2">
                    A library of assignments to help you when you are stuck with an assignment
                </div>

                <div className="searchDiv">
                    <Search
                        placeholder="input search text"
                        style={{ width: 200 }}
                        onSearch={value => console.log(value)}
                        className="search"
                    />
                    <br/>
                </div>

                <div className="searchRecommend">
                    <Button>English Essays</Button>
                    <Button>Business</Button>
                    <Button>Coding</Button>
                    <Link to="/documentExample">Document Example</Link>

                </div>
            </div>
        );
    }
}

export default PCHeader = Form.create({})(PCHeader);