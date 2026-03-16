import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Navbar";
import { Layout } from "antd";
import './App.css';
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const AppContent = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username') || '' } as IUser);
      setIsAuth(true);
    }
  }, [])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}
