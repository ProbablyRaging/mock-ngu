import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NewPost from './NewPost';

const ForumIndex = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='flex w-full items-center justify-center my-7'>
            <div className='flex p-4 w-full flex-nowrap max-w-[83%] bg-container rounded'>
                <div className='flex flex-col w-full'>

                    <div className='flex justify-between mb-4'>
                        <p className='font-medium text-2xl'>
                            Site Announcements
                        </p>

                        <div>
                            <Button
                                startContent={<PostAddIcon fontSize='small' />}
                                radius='sm'
                                color='primary'
                                onClick={toggleModal}
                            >
                                Create Post
                            </Button>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className='flex-grow'>
                            This is nothing here yet..
                        </div>
                    </div>

                </div>
            </div>
            <NewPost isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
    )
}

export default ForumIndex;


{/* Render sub-forums */ }
// {forum.sub_forums && Object.values(forum.sub_forums).map((sub) => (
//     <div key={sub.name} className="sub-forum">
//         <div>{sub.name}</div>
//     </div>
// ))}