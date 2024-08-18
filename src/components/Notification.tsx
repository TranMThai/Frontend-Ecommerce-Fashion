import { Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import NotificationBox from './NotificationBox'

const Notification: React.FC = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setOpen(open);
    };

    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current notification"
                sx={{
                    color: '#A6B0B8',
                    mr: 2,
                    position: 'relative'
                }}
                onClick={toggleDrawer(true)}
            >
                <i className='fa-solid fa-bell fs-2' />
                <Box
                    component='span'
                    sx={{
                        position: 'absolute',
                        top: 5,
                        right: 3,
                        width: 20,
                        height: 20,
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 15,
                    }}
                >
                    99
                </Box>
            </IconButton>

            <NotificationBox
                open={open}
                toggleDrawer={toggleDrawer}
            />
        </>
    )
}

export default Notification