import React, { memo, useEffect } from 'react';
import { Page } from 'widgets/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBySeed } from 'features/AuthBySeed/model/actions/fetchBySeed';
import {
    getUserAuthData, getUserItems,
    getUserItemsLoad,
} from 'entities/user/model/selectors/userSelectors';
import { UsersList } from 'entities/user/ui/UsersList/UsersList';

const MainPage = () => {
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const userItemsLoad = useSelector(getUserItemsLoad);
    const userItems = useSelector(getUserItems);

    useEffect(() => {
        if (!userItemsLoad) {
            dispatch(fetchBySeed(userAuthData, () => {

            }));
        }
    }, [dispatch, userAuthData, userItemsLoad]);
    console.log(userItems);
    return (
        <Page>
            <UsersList />
        </Page>
    );
};

export default memo(MainPage);
