import dva from 'dva';


const app = new dva({
	config: {
		onError(e) {
		  e.preventDefault();
		  console.error(e.message);
		},
	}
});

app.model(require('./models/user').default);

app.router(require('./route').default);

app.start('#root');