import Link from 'next/link';
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='static flex w-full h-24 items-center justify-center data-[menu-open=true]:border-none bg-footer'>
            <div className='flex z-40 px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[85%]'>
                <div className='flex text-gray-400 text-xs font-light'>
                    <div className='pr-6 pb-4 border-r border-default-200 dark:border-default-100'>
                        <p className='dark:text-[#676666]'>
                            Copyright &copy; {year}, NextGenUpdate.
                        </p>
                        <p className='dark:text-[#676666] mb-3'>
                            All Rights Reserved.
                        </p>
                        <img src='/logo_greyscale.png' width='68' height='20' />
                    </div>

                    <ul className='px-6'>
                        <li>
                            <Link className='text-blue-400' href=''>
                                Website Staff
                            </Link>
                        </li>
                        <li>
                            <Link className='text-blue-400' href=''>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link className='text-blue-400' href=''>
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link className='text-blue-400' href=''>
                                Top
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='sm:flex hidden items-top space-x-2 text-5xl'>
                    <Link href=''>
                        <TwitterIcon className='text-blue-500' fontSize='large' />
                    </Link>
                    <Link href=''>
                        <FacebookOutlinedIcon className='text-blue-800' fontSize='large' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer