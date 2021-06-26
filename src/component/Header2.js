import { Layout, Menu, Row, Col } from 'antd';
const { Header } = Layout;

const Header2 = (props) => {
  const clickEventHandler = () => {
    props.logout();
  };
 const clickAdminHandler = (event) => {
 

  props.admin1()

 }
 const userClick = () =>{
props.user()

 }

  return (
    <>
      <Row>
        {props.dataHeading &&
        props.dataHeading.username !== '' &&
        props.dataHeading.password !== '' ? (
          <Col span={6} offset={18}>
            <Menu mode="horizontal">
              <Menu.Item onClick={userClick}>user</Menu.Item>
              <Menu.Item onClick={clickAdminHandler}>admin</Menu.Item>
              <Menu.Item onClick={clickEventHandler}>Logout</Menu.Item>
            </Menu>
          </Col>
        ) : (
          <Col>
            <h1>Login</h1>
          </Col>
        )}
      </Row>
    </>
  );
};
export default Header2;
