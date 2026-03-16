import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth);

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    key={route.path}
                    element={<route.component />} />
            ))}
            <Route path="*" element={<Navigate to={RouteNames.EVENT} replace />} />
        </Routes>
    )
        : (
            <Routes>
                {publicRoutes.map((route) => (
                    <Route
                        path={route.path}
                        key={route.path}
                        element={<route.component />} />
                ))}
                <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
            </Routes>
        )
}
