import React from 'react';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import Content from '@components/content';
import pjson from '@pjson';
import Head from 'next/head';

export default function Welcome(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="description" content="Frávega template app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="version" content={pjson.version}></meta>
        <title>{pjson.name}</title>
      </Head>
      <NavBar />
      <Content/>
      <Footer />
    </>
  );
}
