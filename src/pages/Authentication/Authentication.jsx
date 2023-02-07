import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';

const Authentication = () => {
    const buttonStyles = {
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3',  
            }
        },
        '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent',  
            }
        }
    }
    return(
        <Grid item xs={8}>
            Authentication page
            <CommonButton
                size="large"
                variant="contained"
                sx={buttonStyles}
            >
                Text
            </CommonButton>
            <CommonButton
                size="large"
                variant="outlined"
                sx={buttonStyles}
            >
                Text
            </CommonButton>
        </Grid>
    );
};

export default Authentication;