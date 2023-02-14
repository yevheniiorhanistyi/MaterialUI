import React, { useState } from 'react';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicCard from '../../components/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NewUserModal from '../../components/Modals/NewUserModal/NewUserModal';
import { cardHeaderStyles } from './styles';

const Authentication = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);

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

    const addNewUser = (data) => {
        users.push({ ...data });
        setOpen(false);
    };
    
    const getContent = () => (
        <>
            {
                users.length ? 
                    users.map((user) => (
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography>User ID: {user.userId}</Typography>
                            <Typography>Email: {user.email}</Typography>
                            <Typography>Phone Number: {user.phoneNumber}</Typography>
                        </Box>
                    )) :
            
                <Typography 
                    align="center"
                    sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
                >
                    No users for this project yet
                </Typography>
            }
        </>
    );

    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />
            <NewUserModal open={open} onClose={() => setOpen(false)} addNewUser={addNewUser}/>
        </GridWrapper>
    )
};

export default Authentication;