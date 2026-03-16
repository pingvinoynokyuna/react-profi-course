import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import { useActions } from '../hooks/useActions';

export const Navbar = () => {
    const navigate = useNavigate();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const { logout } = useActions();

    const loginMenuItems = [
        {
            key: 'login',
            label: 'Логин',
            onClick: () => navigate(RouteNames.LOGIN)
        }
    ]

    const logoutMenuItems = [
        {
            key: 'logout',
            label: 'Выйти',
            onClick: () => logout()
        }
    ]

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>{user.username}</div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                            items={logoutMenuItems}
                        >
                        </Menu>
                    </>
                    :
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        items={loginMenuItems}
                        disabledOverflow={true}
                    />
                }
            </Row>
        </Layout.Header>
    )
}
