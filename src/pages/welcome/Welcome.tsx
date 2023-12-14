import { useEffect } from 'react';
import Content from '@components/content';
import ClientForm from '@components/forms'
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

export default function Welcome(): JSX.Element {
    const router = useRouter();
    // This function will be called whenever the query parameters change
    useEffect(() => {
      // Access the query parameters from the router object
      const { cuid, documentType, documentNumber } = router.query;

      // Perform any actions based on the query parameters
      // eslint-disable-next-line no-console
      console.log('Query parameters changed:', cuid, documentType, documentNumber);
    }, [router.query]);
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

            <ClientForm />
            <Content />
        </>
    );
}
