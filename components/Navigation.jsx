import React from 'react';
import Link from 'next/link';
import { Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection } from "@nextui-org/react";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Navigation = () => {
    return (
        <div className='flex z-40 w-full h-10 items-center justify-center data-[menu-open=true]:border-none bg-navigation'>
            <div className='flex z-40 px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[85%] text-sm'>
                <div className='flex items-center'>
                    <Link href='/'
                        className="text-white text-xs mr-8"
                        radius="sm"
                    >
                        Home
                    </Link>

                    <Dropdown radius='none' placement='bottom-start'>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-[75px]"
                                radius="sm"
                            >
                                Forums
                                <ArrowDropDownOutlinedIcon className='mr-5' />
                            </Button>
                        </DropdownTrigger>

                        <DropdownMenu className="w-[340px] text-xs" itemClasses={{ base: "gap-4", }}>
                            <DropdownSection title="GAMING FORUMS">
                                <DropdownItem key="gtav">
                                    GTA V
                                </DropdownItem>
                                <DropdownItem key="cod">
                                    Call Of Duty Classics
                                </DropdownItem>
                            </DropdownSection>

                            <DropdownSection title="HOT & LATEST">
                                <DropdownItem key="hot">
                                    Hot Post
                                </DropdownItem>
                                <DropdownItem key="latest">
                                    Latest Posts
                                </DropdownItem>
                            </DropdownSection>

                            <DropdownSection title="GENERAL">
                                <DropdownItem key="announcements">
                                    Announcements
                                </DropdownItem>
                                <DropdownItem key="discussion">
                                    General Discussions
                                </DropdownItem>
                            </DropdownSection>

                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown radius='none' placement='bottom-start'>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-[75px]"
                                radius="sm"
                            >
                                Games
                                <ArrowDropDownOutlinedIcon className='mr-5' />
                            </Button>
                        </DropdownTrigger>

                        <DropdownMenu className="w-[340px] text-xs" itemClasses={{ base: "gap-4", }}>
                            <DropdownSection title="GAMING FORUMS">
                                <DropdownItem key="gtav">
                                    GTA V
                                </DropdownItem>
                                <DropdownItem key="cod">
                                    Call Of Duty Classics
                                </DropdownItem>
                            </DropdownSection>

                            <DropdownSection title="HOT & LATEST">
                                <DropdownItem key="hot">
                                    Hot Post
                                </DropdownItem>
                                <DropdownItem key="latest">
                                    Latest Posts
                                </DropdownItem>
                            </DropdownSection>

                            <DropdownSection title="GENERAL">
                                <DropdownItem key="announcements">
                                    Announcements
                                </DropdownItem>
                                <DropdownItem key="discussion">
                                    General Discussions
                                </DropdownItem>
                            </DropdownSection>

                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown radius='none' placement='bottom-start'>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-[75px]"
                                radius="sm"
                            >
                                Quick Links
                                <ArrowDropDownOutlinedIcon />
                            </Button>
                        </DropdownTrigger>

                        <DropdownMenu className="w-[340px] text-xs" itemClasses={{ base: "gap-4", }}>
                            <DropdownSection title="GAMING FORUMS">
                                <DropdownItem key="gtav">
                                    GTA V
                                </DropdownItem>
                                <DropdownItem key="cod">
                                    Call Of Duty Classics
                                </DropdownItem>
                            </DropdownSection>

                            <DropdownSection title="HOT & LATEST">
                                <DropdownItem key="hot">
                                    Hot Post
                                </DropdownItem>
                                <DropdownItem key="latest">
                                    Latest Posts
                                </DropdownItem>
                            </DropdownSection>

                            <DropdownSection title="GENERAL">
                                <DropdownItem key="announcements">
                                    Announcements
                                </DropdownItem>
                                <DropdownItem key="discussion">
                                    General Discussions
                                </DropdownItem>
                            </DropdownSection>

                        </DropdownMenu>
                    </Dropdown>

                    <Button
                        disableRipple
                        className="text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-[75px]"
                        radius="sm"
                    >
                        Articles
                    </Button>

                    <Button
                        disableRipple
                        className="text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-[75px]"
                        radius="sm"
                    >
                        Mods
                    </Button>

                    <Button
                        disableRipple
                        className="text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-[75px]"
                        radius="sm"
                    >
                        Videos
                    </Button>

                    <Button
                        disableRipple
                        className="text-white text-xs p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent min-w-[75px]"
                        radius="sm"
                    >
                        Glitches
                    </Button>
                </div>

                <div className='text-white'>
                    Profile
                </div>
            </div>

        </div>
    )
}

export default Navigation