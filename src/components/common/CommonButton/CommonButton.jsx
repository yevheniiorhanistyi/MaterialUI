import Button from '@mui/material/Button';

const CommonButton = ({children, color, disabled, size, variant, sx}) => {
    return(
            <Button
                color={color}
                disabled={disabled}
                size={size}
                variant={variant}
                sx={sx}
            >
                {children}
            </Button>
    )
}

export default CommonButton;

// const buttonStyles = {
//     fontSize: '0.875rem',
//     fontWeight: 600,
//     textTransform: 'capitalize',
//     borderRadius: 2.5,
//     '&.MuiButton-contained': {
//         backgroundColor: '#009be5',
//         '&:hover': {
//             backgroundColor: '#006db3',  
//         }
//     },
//     '&.MuiButton-outlined': {
//         color: '#fff',
//         borderColor: '#fff',
//         '&:hover': {
//             backgroundColor: 'transparent',  
//         }
//     }
// }