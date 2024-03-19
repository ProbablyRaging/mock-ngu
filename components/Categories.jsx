import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Avatar } from '@nextui-org/react';

const Categories = () => {
    const data = {
        index: {
            1: {
                category: 'NGU Site Boards',
                forums: {
                    1: {
                        name: 'Site Announcements',
                        icon: 'cat_1',
                        path: '/site_announcements',
                        sub_forums: null,
                        latest_post: {
                            title: 'Big forum updates',
                            createdAt: 'Today at 1:54 PM',
                            createdBy: 'Saul',
                            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
                            sub_forum: 'Site Announements',
                            sub_path: '/site-announcements',
                            path: '/site-announcements/848235-big-forum-updates'
                        }
                    },
                    2: {
                        name: 'Site Suggestions',
                        icon: 'cat_2',
                        path: '/site_suggestions',
                        sub_forums: {
                            1: {
                                name: 'Closed Suggestions'
                            }
                        }
                    },
                    3: {
                        name: 'Site and Forum Help',
                        icon: 'cat_3',
                        path: '/site_forum_help',
                        sub_forums: {
                            1: {
                                name: 'Completed Inquiried',
                                path: '/site_forum_help/completed_inquiries',
                            }
                        }
                    },
                    4: {
                        name: 'Introduce Yourself',
                        icon: 'cat_4',
                        path: '/introduce_yourself',
                        sub_forums: null,
                        latest_post: {
                            title: `Hello, I'm new here`,
                            createdAt: 'Yesterday at 9:22 AM',
                            createdBy: 'User3',
                            sub_forum: 'Introduce Yourself',
                            sub_path: '/introduce-yourself',
                            path: '/introduce-yourself/5433647-hello-im-new-here'
                        }
                    }
                }
            },
            2: {
                category: 'Member Boards',
                forums: {
                    1: {
                        name: 'General Discussion',
                        icon: 'cat_5',
                        path: '/general_discussion',
                        sub_forums: {
                            1: {
                                name: 'Site Games',
                                path: '/general_discussion'
                            },
                            2: {
                                name: 'Hot Posts',
                                path: '/general_discussion'
                            },
                            3: {
                                name: 'Crypto',
                                path: '/general_discussion'
                            },
                            4: {
                                name: 'Latest Posts',
                                path: '/general_discussion'
                            },
                            5: {
                                name: 'Latest Comments',
                                path: '/general_discussion'
                            }
                        }
                    },
                    2: {
                        name: 'Auctions',
                        icon: 'cat_6',
                        path: '/auctions',
                        sub_forums: {
                            1: {
                                name: 'General Auctions and Information',
                                path: '/auctions',
                            },
                            2: {
                                name: 'Accounts and Services',
                                path: '/auctions'
                            },
                            3: {
                                name: 'PlayStation Trophies',
                                path: '/auctions'
                            },
                        }
                    },
                    3: {
                        name: 'Media & Design',
                        icon: 'cat_7',
                        path: '/media_design',
                        sub_forums: null
                    },
                    4: {
                        name: 'YouTube',
                        icon: 'cat_8',
                        path: '/youtube',
                        sub_forums: null
                    },
                    5: {
                        name: 'Gaming Giveaways and Contests',
                        icon: 'cat_9',
                        path: '/gaming_giveaway_contests',
                        sub_forums: {
                            1: {
                                name: 'Completed Giveaways',
                                path: '/gaming_giveaway_contests',
                            }
                        }
                    }
                }
            },
        }
    }

    return (
        <div className='shadow-md dark:shadow-none border border-border p-2 rounded'>
            {/* Render categories */}
            {Object.values(data.index).map((category) => (
                <div key={category.category} className='min-h-[52px] mb-5'>
                    <div className='text-white text-md bg-primary px-4 py-2 rounded'>
                        <p>{category.category}</p>
                    </div>

                    <div>
                        {/* Render forums */}
                        {Object.values(category.forums).map((forum, index, array) => (
                            <div key={forum.name} className={index !== array.length - 1 ? 'border-b border-border hover:bg-hover rounded' : 'hover:bg-hover rounded'}>

                                <div className='flex justify-between'>
                                    <div className='py-3 w-full'>
                                        <div className='flex items-center gap-2 px-5'>
                                            {forum.icon && <Image src={`/${forum.icon}.png`} width='48' height='48' alt={forum.icon} />}
                                            <Link href={forum.path}>
                                                <p>{forum.name}</p>
                                            </Link>
                                        </div>
                                        <div className='flex flex-wrap gap-x-8 gap-y-1 max-w-[40%] pl-[75px] mb-2'>
                                            {forum.sub_forums && Object.values(forum.sub_forums).map((subforum, index) => (
                                                <Link href={subforum.path || ''}>
                                                    <p key={index} className='flex items-center text-xs'>
                                                        ↪ {subforum.name}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-end gap-4 px-5 py-3 min-w-fit'>
                                        {forum.latest_post && (
                                            <div className='flex items-center gap-2 text-xs'>
                                                <div>
                                                    <Link href={`/users/${forum.latest_post.createdBy.toLowerCase(0)}`}>
                                                        <Avatar isBordered src={forum.latest_post.avatar} />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <a href={forum.latest_post.path}>
                                                        <p>{forum.latest_post.title.slice(0, 24)}</p>
                                                    </a>
                                                    <p className='text-default-400'>
                                                        <a href={`/users/${forum.latest_post.createdBy.toLowerCase()}`}>
                                                            {forum.latest_post.createdBy}
                                                        </a>
                                                    </p>
                                                    <p className='text-default-400'>{forum.latest_post.createdAt}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categories