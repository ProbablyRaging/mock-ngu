import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import SubForumIndex from '@/components/SubForumIndex'

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>
                    Site Announcements - NextGenUpdate
                </title>
            </Head>
            <Layout>
                <SubForumIndex />
            </Layout>
        </React.Fragment>
    )
}