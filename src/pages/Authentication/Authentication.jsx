import React from 'react';
import Grid from '@mui/material/Grid';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Avatar from '@mui/material/Avatar';

const Authentication = () => {
    
    
    return(
        <Grid item xs={8}>
            Authentication page
            <CommonButton
                variant='default'
            >
                Go to docs
            </CommonButton>
            <NotificationBell 
                iconColor='primary'
            />
            <Avatar src='https://mui.com/static/images/avatar/1.jpg'/>
        </Grid>
    );
};

export default Authentication;