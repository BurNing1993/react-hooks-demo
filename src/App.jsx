import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Layout, Menu, Card } from "antd";
import "./App.css";
import Loading from "./components/Loading";
const Home = React.lazy(() => import("./pages/home"));
const UseState = React.lazy(() => import("./pages/use-state"));
const UseEffect = React.lazy(() => import("./pages/use-effect"));
const UseContext = React.lazy(() => import("./pages/use-context"));
const UseReducer = React.lazy(() => import("./pages/use-reducer"));
const ReduxHooks = React.lazy(() => import("./pages/redux-hooks"));

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
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/use-state">
              <Link to="/use-state">useState</Link>
            </Menu.Item>
            <Menu.Item key="/use-effect">
              <Link to="/use-effect">useEffect</Link>
            </Menu.Item>
            <Menu.Item key="/use-context">
              <Link to="/use-context">useContext</Link>
            </Menu.Item>
            <Menu.Item key="/use-reducer">
              <Link to="/use-reducer">useReducer</Link>
            </Menu.Item>
            <Menu.Item key="/redux-hooks">
              <Link to="/redux-hooks">ReduxHooks</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="content" style={{ background: "#fff", padding: 24 }}>
            <Card style={{maxWidth:'650px',width:'100%'}}>
              <Suspense fallback={<Loading />}>
                <Route exact path="/" component={Home} />
                <Route path="/use-state" component={UseState} />
                <Route path="/use-effect" component={UseEffect} />
                <Route path="/use-context" component={UseContext} />
                <Route path="/use-reducer" component={UseReducer} />
                <Route path="/redux-hooks" component={ReduxHooks} />
              </Suspense>
            </Card>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
