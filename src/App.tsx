import React from "react";

import { Layout } from "./components/containers";

import "./App.less";
import Router from "./Router";

export interface IAppProps {}

const App = () => (
  <Layout>
    <Router />
  </Layout>
);

export default App;
