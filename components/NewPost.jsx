import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";

const NewPost = ({ isOpen, toggleModal }) => {
    return (
        <React.Fragment>
            <Modal isOpen={isOpen} onClose={toggleModal} classNames={{ base: 'max-w-[75%] min-h-[50%] rounded' }}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Create Post</ModalHeader>
                    <ModalBody>
                        <Select
                            isRequired
                            label="Post Thread In"
                            placeholder="Choose"
                            className="max-w-[25%] border border-border rounded"
                        >
                            <SelectItem value='0'>
                                Site Suggestions
                            </SelectItem>
                            <SelectItem value='1'>
                                Introduce Yourself
                            </SelectItem>
                            <SelectItem value='2'>
                                General Discussions
                            </SelectItem>
                            <SelectItem value='3'>
                                Auctions
                            </SelectItem>
                        </Select>
                        <div className='flex items-center gap-3'>
                            <Select
                                label="Prefix"
                                placeholder="None"
                                className="max-w-[15%] border border-border rounded"
                            >
                                <SelectItem value='0'>
                                    None
                                </SelectItem>
                                <SelectItem value='1'>
                                    Some option
                                </SelectItem>
                            </Select>

                            <Input
                                isRequired
                                type="text"
                                label="Title"
                                className="border border-border rounded"
                            />

                            <Button color="danger" variant='light' className='min-w-[120px] border border-border' onClick={toggleModal}>
                                Discard
                            </Button>
                            <Button color="primary" className='min-w-[120px] border border-border' onClick={toggleModal}>
                                Post
                            </Button>
                        </div>

                        <Textarea
                            isRequired
                            label="Body"
                            labelPlacement="inside"
                            className='max-h-full border border-border rounded'
                            minRows='16'
                            maxRows='28'
                        />
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    )
}

export default NewPost