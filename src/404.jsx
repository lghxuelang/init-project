import React from 'react';
import {Result, Button} from 'antd';
import {useHistory} from 'react-router-dom';

export default () => {
    const his = useHistory();
    return (
        <Result
            status="404"
            title="404"
            subTitle="对不起，您的页面飞走了~~~"
            extra={<Button type="primary" onClick={e => {
                his.push('/home');
            }}>回到主页</Button>}
        />
    );
}