import logo from './logo.svg';
import './App.css';

const cloudbase = require('@cloudbase/js-sdk').default;

const config = {
  env: 'docschina-live-10765e' // 前往「腾讯云控制台」-「云开发 CloudBase」获取
};
const app = cloudbase.init(config);
const db = app.database();

console.log('db',db);

function App() {
  return (
    <div className="App">
     aaa
    </div>
  );
}

export default App;
