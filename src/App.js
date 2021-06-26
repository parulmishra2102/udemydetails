import './App.css';
import D1, { D2 } from './component/Dummy';
import { Layout, Form, Input, Row, Col, Button } from 'antd';
import Login from './component/Login';
import WelcomePage from './component/WelcomePage';
import Header2 from './component/Header2';
import { useState } from 'react';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [dataAfterLogin, setlogin] = useState();
  const [displaytitle, setTitle] = useState('welcome');
  const title = 'Login Page';

  const gotData = (param) => {
    setlogin(param);
  };
  const logout = () => {
    setlogin('');
  };

  const admin = () => {
    setTitle('Admin');
  };
  const user = () => {
    setTitle('user');
  };
  return (
    <>
      <Layout>
        {/* {dataAfterLogin && dataAfterLogin.username!==''&&
      dataAfterLogin.password !==''?
      (<Header2  className='header2'></Header2>): <Header className="header">{title}</Header>
        } */}
        <Header className="header">
          <Header2
            dataHeading={dataAfterLogin}
            logout={logout}
            admin1={admin}
            user={user}
          ></Header2>
        </Header>

        <Content>
          {dataAfterLogin &&
          dataAfterLogin.username !== '' &&
          dataAfterLogin.password !== '' ? (
            <WelcomePage display={displaytitle}></WelcomePage>
          ) : (
            <Login dataRecieved={gotData}></Login>
          )}
        </Content>
      </Layout>
    </>
  );
}

export default App;
