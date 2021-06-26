import {Row, Col, Button } from 'antd';

const  WelcomePage = (props) => {

return(<>
<Row>
<Col span={12} offset={12}>
<h1>
    {props.display}</h1>
</Col>
</Row>
</>)
}
export default WelcomePage;