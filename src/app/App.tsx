import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { getUserAuthData, getUserInited } from 'entities/user/model/selectors/userSelectors';
import { initAuthData } from 'entities/user/model/actions/initAuthData';

function App() {
    const inited = useSelector(getUserInited);
    const userAuthData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    return (
        <div className={classNames('app', { special: true })}>
            <Suspense fallback="">
                {userAuthData.seed && <Navbar />}
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
