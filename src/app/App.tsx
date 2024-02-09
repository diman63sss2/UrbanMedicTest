import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { getIsAuth, getSeed, getSeedInited } from 'features/AuthBySeed/model/selectors/authBySeedSelectors';
import { loginBySeed } from 'features/AuthBySeed/model/actions/LoginBySeed';
import { initAuthData } from 'features/AuthBySeed/model/actions/initAuthData';

function App() {
    const inited = useSelector(getSeedInited);
    const seed = useSelector(getSeed);
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    useEffect(() => {
        if (seed !== '' && !inited) {
            dispatch(loginBySeed({ seed }, () => {

            }));
        }
    }, [dispatch, seed, inited]);

    return (
        <div className={classNames('app', { special: true })}>
            <Suspense fallback="">
                {isAuth && <Navbar />}
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
