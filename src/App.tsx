import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Navbar";
import { Layout } from "antd";
import './App.css';
import { useEffect } from "react";

export const App = () => {

  useEffect(() => {
    if(localStorage.getItem('auth')) {

    }
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Layout.Content>
            <AppRouter />
          </Layout.Content>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
