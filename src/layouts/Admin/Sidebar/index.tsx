import React from 'react';
import { Menu, Sidebar as SidebarPro, SubMenu } from 'react-pro-sidebar';
import MenuItem from './MenuItem';

interface IProps {
    collapse: boolean,
    toggled: boolean,
    broken: boolean,
    setToggled: React.Dispatch<React.SetStateAction<boolean>>,
    setBroken: React.Dispatch<React.SetStateAction<boolean>>
}

const AdminSidebar: React.FC<IProps> = ({ collapse, toggled, setToggled, setBroken, broken }) => {

    return (
        <SidebarPro
            collapsed={collapse}
            collapsedWidth="5em"
            width={broken ? "13em" : "18em"}
            backgroundColor='#141A21'
            rootStyles={{
                border: '0',
                height: '100vh',
                position: 'sticky',
                top: 0,
                zIndex: 1
            }}
            customBreakPoint="1000px"
            toggled={toggled}
            onBackdropClick={() => setToggled(false)}
            onBreakPoint={setBroken}
        >
            <Menu
                rootStyles={{
                    marginTop: 30
                }}
                menuItemStyles={{
                    subMenuContent: {
                        backgroundColor: '#141A21'
                    },
                    button: {
                        padding: 20,
                        margin: 2,
                        marginRight: collapse ? 2.5 : 10,
                        marginLeft: collapse ? 2.5 : 10,
                        borderRadius: 5,
                        color: 'white',
                        ":hover": {
                            backgroundColor: '#1D242B'
                        }
                    }
                }}
            >
                <MenuItem
                    to='/admin/product'
                    icon={<i className='fa-solid fa-shirt fs-5' />}
                >
                    Product
                </MenuItem>
                <SubMenu
                    label="Attributes"
                    icon={<i className='fa-solid fa-file-signature fs-5' />}
                >
                    <MenuItem
                        to='/admin/color'
                        collapse={collapse}
                    >
                        Color
                    </MenuItem>
                    <MenuItem
                        to='/admin/size'
                        collapse={collapse}
                    >
                        Size
                    </MenuItem>
                    <MenuItem
                        to='/admin/brand'
                        collapse={collapse}
                    >
                        Brand
                    </MenuItem>
                    <MenuItem
                        to='/admin/origin'
                        collapse={collapse}
                    >
                        Origin
                    </MenuItem>
                    <MenuItem
                        to='/admin/material'
                        collapse={collapse}
                    >
                        Material
                    </MenuItem>
                    <MenuItem
                        to='/admin/category'
                        collapse={collapse}
                    >
                        Category
                    </MenuItem>
                    <MenuItem
                        to='/admin/special-attributes'
                        collapse={collapse}
                    >
                        Special attributes
                    </MenuItem>
                </SubMenu>
            </Menu>
        </SidebarPro >
    )
}

export default AdminSidebar