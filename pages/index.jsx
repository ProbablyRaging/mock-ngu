import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ForumIndex from '@/components/ForumIndex';

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>
                    Forums - NextGenUpdate
                </title>
            </Head>
            <Layout>
                <ForumIndex />
            </Layout>
        </React.Fragment>
    )
}