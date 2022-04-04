import Mock from 'mockjs';


export const getUserList = Mock.mock('/api/user/getUserList', {
    'list': [
        {name: 'js', age: 12},
        {name: 'java', age: 4}
    ]
});

export const updateUser = Mock.mock('/api/user/updateUser', {
    'list': [
        {name: 'javescript', age: 12},
        {name: 'java', age: 24}
    ]
});
