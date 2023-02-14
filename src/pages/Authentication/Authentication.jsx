import React, { useState } from 'react';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicCard from '../../components/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicModal from '../../components/common/BasicModal/BasicModal';
import { cardHeaderStyles } from './styles';

const Authentication = () => {
    const [open, setOpen] = useState(false);

    const getHeader = () => {
        const handleChange = (value) => {
            console.log(value)
        }

        const addUser = () => {
            setOpen(true)
        };

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar 
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleChange(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton 
                        onClick={addUser}
                        variant="contained"
                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        Add user
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
        
    }
    
    const getContent = () => (
        <Typography 
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No users for this project yet
        </Typography>
    );

    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />
            <BasicModal open={open} onClose={() => setOpen(false)} />
        </GridWrapper>
    )
};

export default Authentication;