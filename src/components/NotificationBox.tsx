import { Box, Drawer } from '@mui/material'
import React from 'react'

interface IProps {
    open: boolean,
    toggleDrawer: (open: boolean) => () => void
}

const NotificationBox: React.FC<IProps> = ({ open, toggleDrawer }) => {
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

            </Box>
        </Drawer>
    )
}

export default NotificationBox