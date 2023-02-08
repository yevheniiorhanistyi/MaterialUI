import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

const notifications = [
    {
        id: 0,
        label: 'First notification'
    },
    {
        id: 1,
        label: 'Second notification'
    },
  ];

const NotificationBell = ({iconColor}) => {
    const newNotifications = `You have ${notifications.length} new notifications!`;
    const noNotifications = `No new notifications`;
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
      };


    return(
        <div>
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color={iconColor}
                    anchorEl={anchorEl}
                    onClick={notifications.length ? handleOpen : null} 
                >
                    <Badge badgeContent={notifications.length} color="error">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
                menuItems={notifications}
            />
        </div>
    )
}

export default NotificationBell;