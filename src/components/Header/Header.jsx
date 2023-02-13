import CommonButton from '../common/CommonButton/CommonButton';
import NotificationBell from '../common/NotificationBell/NotificationBell';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const Header = ({title}) => {
    return(
        <div>
            <CommonButton
                variant='default'
            >
                Go to docs
            </CommonButton>
            <NotificationBell 
                iconColor='primary'
            />
            <Avatar src='https://mui.com/static/images/avatar/1.jpg'/>
            {/* second row */}
            <Typography>{title}</Typography>
            <CommonButton variant="outlined">Web setup</CommonButton>
        </div>
    )
}

export default Header;