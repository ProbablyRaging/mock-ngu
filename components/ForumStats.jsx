import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarGroup } from "@nextui-org/react";
import HandymanSharpIcon from '@mui/icons-material/HandymanSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';

const ForumStats = () => {
    const staffOnline = {
        1: {
            username: 'ProbablyRaging',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            role: 'mod'
        },
        2: {
            username: 'Saul',
            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
            role: 'admin'
        }
    };

    const hotPosts = {
        1: {
            title: 'Big forum updates',
            createdAt: 'Today at 1:54 PM',
            createdBy: 'Saul',
            sub_forum: 'Site Announements',
            sub_path: '/site-announcements',
            path: '/site-announcements/848235-big-forum-updates'
        },
        2: {
            title: `Hello, I'm new here`,
            createdAt: 'Yesterday at 9:22 AM',
            createdBy: 'User3',
            sub_forum: 'Introduce Yourself',
            sub_path: '/introduce-yourself',
            path: '/introduce-yourself/5433647-hello-im-new-here'
        }
    }

    return (
        <div className='flex flex-col gap-4 min-w-[300px] max-w-[300px]'>
            <div className='h-fit shadow-md dark:shadow-none border border-border p-2 rounded'>
                <div className='min-h-[52px]'>
                    <div className='flex items-center gap-2 text-white text-md bg-primary px-4 py-2 rounded'>
                        <LocalFireDepartmentSharpIcon fontSize='small' />
                        <p>Hot Posts</p>
                    </div>

                    <div className='px-2 py-3'>
                        <ul>
                            {Object.values(hotPosts).map((post) => (
                                <li key={post.title} className='flex flex-col mb-3'>
                                    <a href={post.path}>
                                        <p>{post.title}</p>
                                    </a>
                                    <p className='text-sm text-default-400'>
                                        <a href={`/users/${post.createdBy.toLowerCase()}`}>
                                            {post.createdBy}
                                        </a> • {post.createdAt}
                                    </p>
                                    <a href={post.sub_path}>
                                        <p className='text-sm text-default-400'>{post.sub_forum}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='h-fit shadow-md dark:shadow-none border border-border p-2 rounded'>
                <div className='min-h-[52px]'>
                    <div className='flex items-center gap-2 text-white text-md bg-primary px-4 py-2 rounded'>
                        <HandymanSharpIcon fontSize='small' />
                        <p>Staff Online</p>
                    </div>

                    <div className='px-2 py-3'>
                        <ul>
                            {Object.values(staffOnline).map((user) => (
                                <a key={user.username} href={`/users/${user.username.toLowerCase()}`}>
                                    <li className='flex items-center gap-2 mb-3'>
                                        <img src={user.avatar} className='rounded-full' width='28' height='28' alt={user.username} />
                                        {user.role === 'admin' && (
                                            <p className={`font-medium text-red-800`}>
                                                {user.username}
                                            </p>
                                        )}
                                        {user.role === 'mod' && (
                                            <p className={`font-medium text-blue-800`}>
                                                {user.username}
                                            </p>
                                        )}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='h-fit shadow-md dark:shadow-none border border-border p-2 rounded'>
                <div className='min-h-[52px]'>
                    <div className='flex items-center gap-2 text-white text-md bg-primary px-4 py-2 rounded'>
                        <PeopleSharpIcon fontSize='small' />
                        <p>Members Online</p>
                    </div>

                    <div className='py-3'>
                        <AvatarGroup
                            isBordered
                            max={6}
                            total={456}
                            renderCount={(count) => (
                                <p className="text-small text-foreground font-medium ms-2">+{count - 5} others</p>
                            )}
                        >
                            <Link href='/users/1'>
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            </Link>
                            <Link href='/users/2'>
                                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            </Link>
                            <Link href='/users/3'>
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            </Link>
                            <Link href='/users/4'>
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            </Link>
                            <Link href='/users/5'>
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            </Link>
                            <Link href='/users/6'>
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                            </Link>

                        </AvatarGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForumStats