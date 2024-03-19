import React from 'react';
import { useTheme } from "next-themes";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input } from "@nextui-org/react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Navbar className='bg-header text-white h-14' position="static">
            <NavbarBrand className='gap-6'>
                <img width='85' height='24' src='/logo.png' />

                <NavbarItem className='flex gap-0'>
                    <Button
                        disableRipple
                        className="text-white text-xs  min-w-12 p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent"
                        radius="sm"
                    >
                        <NotificationsNoneIcon fontSize='small' />
                    </Button>

                    <Button
                        disableRipple
                        className="text-white text-xs  min-w-12 p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent"
                        radius="sm"
                    >
                        <LocalPostOfficeOutlinedIcon fontSize='small' />
                    </Button>

                    <Button
                        disableRipple
                        className="text-white text-xs  min-w-12 p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent"
                        radius="sm"
                    >
                        <PersonOutlineOutlinedIcon fontSize='small' />
                    </Button>
                </NavbarItem>

            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem className="items-center gap-2 hidden lg:flex">
                    <Button className='text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-10' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        {theme === 'light' ? <DarkModeOutlinedIcon fontSize='small' /> : <LightModeOutlinedIcon fontSize='small' />}
                    </Button>

                    <Input
                        type="text"
                        placeholder="Search"
                        size='sm'
                        radius='sm'
                        isClearable
                        maxLength='512'
                        startContent={
                            <SearchOutlinedIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header