import Content from '@components/content';
import Head from 'next/head';
import React from 'react';

export default function index() {
    return (
        <>
            <Head>
                <meta name="description" content="Frávega template app" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Frávega Template App</title>
            </Head>

            <Content />
        </>
    );
}
