import React, {useEffect} from "react";
import {connect} from 'dva';
import {Button, List, Typography} from 'antd';


const User = (props)=>{
    const userList = props.userList;
    useEffect(() => {
    }, []);

    const getUserList = () => {
        props.dispatch({
            type: 'user/getUserList',
            payload: {
                id: 123
            }
        });
    }

    return <div>
        <Button onClick={getUserList}>获取</Button>
        <div>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={userList}
                renderItem= {item => (
                    <List.Item>
                        <Typography.Text mark>姓名：{item.name}，年龄: {item.age}</Typography.Text>
                    </List.Item>
                )}
            >
            </List>
        </div>
    </div>
}

export default connect(({user}) => {
    return user;
})(User);