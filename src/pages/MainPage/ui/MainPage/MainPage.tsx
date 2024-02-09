import React, { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useDispatch } from 'react-redux';

const MainPage = () => {
    const dispatch = useDispatch();

    return (
        <Page>
            Main
        </Page>
    );
};

export default memo(MainPage);
