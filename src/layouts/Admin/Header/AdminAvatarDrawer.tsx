import { Avatar, Box, Drawer, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Button from '../../../components/Button';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/reducers/UserReducer';

interface IProps {
    open?: boolean;
    toggleDrawer?: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const AdminAvatarDrawer: React.FC<IProps> = ({ open, toggleDrawer }) => {

    const user = useSelector(userSelector)

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={toggleDrawer ? toggleDrawer(false) : undefined}
        >
            <Box
                sx={{
                    width: {
                        xs: 200,
                        md: 330
                    },
                    padding: 2,
                    height: '100%',
                    backgroundColor: '#f5f5f5'
                }}
                role="presentation"
            >
                <Grid
                    container
                    justifyContent='center'
                    rowGap={1}
                >
                    <Box
                        sx={{
                            width: "60%",
                            aspectRatio: "1/1"
                        }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={user?.avatar}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                    <Typography variant='h6'>
                        {user?.name}
                    </Typography>
                    <Typography variant='body2' noWrap>
                        {user?.username}
                    </Typography>
                </Grid>

                <Stack>
                    <Button
                        backgroundColor='rgba(255, 86, 48, 0.18)'
                        color='rgba(255, 86, 48)'
                    >
                        Logout
                    </Button>
                </Stack>
            </Box>
        </Drawer>
    );
};

export default AdminAvatarDrawer;
