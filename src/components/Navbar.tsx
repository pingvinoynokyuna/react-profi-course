import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Navbar = () => {
    const navigate = useNavigate();
    const { isAuth } = useTypedSelector(state => state.auth);

    const loginMenuItem = [
        {
            key: 'login',
            label: 'Логин',
            onClick: () => navigate(RouteNames.LOGIN)
        }
    ]

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>Anna</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item
                                onClick={() => console.log('Выйти')}
                                key={1}>
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        items={loginMenuItem}
                        disabledOverflow={true} 
                    />
                }
            </Row>
        </Layout.Header>
    )
}
