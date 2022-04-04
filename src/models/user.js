/**
 * user model 
 */
import {getUserList, updateUser} from '../services/user';

export default {
  namespace: 'user',

  state: {
    userList: [
        {name: '张三', age: 16 },
        {name: '李四', age: 18}
    ]
  },
  // 当用户进入 `/users` 页面时，触发 action `users/fetch` 加载用户数据。
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname !== '/users') {
            console.log(pathname);
        }
      });
    },
  },

  effects: {
    *getUserList({payload}, {put}) {
        const {data: {list}} = yield updateUser();
        yield put({
            type: 'setUserList',
            payload: list
        });
    }
  },
  
  reducers: {
    setUserList (state, {payload}) {
      return {state, ...{userList: payload}};
    }
  },
};