import Mock from 'mockjs';

const url = '/api/user/getList';

export default Mock.mock(url, {
    'list': [
        {name:'js', age:12},
        {name: 'java', age: 4}
    ]
});