import React, { useState } from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

const Login = (props) => {
  const [loginDetail, setLoginDetail] = useState({
    username: '',
    password: '',
  });

  const nameChangeHandler = (event) => {
    var detail = { ...loginDetail };
    //  var  newdetail=event.target.name

    setLoginDetail({ ...detail, [event.target.name]: event.target.value });
  };

  const onSaveHandler = (event) => {
    if (loginDetail.username !== '' && loginDetail.password !== '') {
      props.dataRecieved(loginDetail);
    } else {
      alert('please fill the data');
    }
  };

  return (
    <>
      <Form>
        <Row>
          <Col span={12} offset={6}>
            <Form.Item label="Username" name="username">
              <Input onChange={nameChangeHandler} name="username" />
            </Form.Item>
            <Form.Item className="password" label="Password" name="password">
              <Input onChange={nameChangeHandler} name="password" />
            </Form.Item>
            <Col span={12} offset={12}>
              <Button className="button" onClick={onSaveHandler}>
                Log In
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Login;
