import React,{Suspense} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import './App.css';
import Loading from './components/Loading'
const Home = React.lazy(() => import('./pages/home'));
const UseState = React.lazy(() => import('./pages/use-state'));

const { Header, Content } = Layout;


function App() {
  const path = window.location.pathname;
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[path]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">
                Home
                </Link>
            </Menu.Item>
            <Menu.Item key="/use-state">
              <Link to="/use-state">
                useState
                </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="content" style={{ background: '#fff', padding: 24 }}>
            <Suspense fallback={<Loading/>}>
              <Route exact path="/" component={Home} />
              <Route path="/use-state" component={UseState} />
            </Suspense>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
