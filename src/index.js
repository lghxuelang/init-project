import React from 'react';
import ReactDOM from 'react-dom';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';


import Route from './route';

const App = () => {
  	return (
    	<ConfigProvider locale={zhCN}>
			<Route />
      	</ConfigProvider>
  	)
}

ReactDOM.render(
  	<App />,
  	document.getElementById('root')
);