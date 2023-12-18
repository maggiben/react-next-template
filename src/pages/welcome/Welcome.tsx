import React from 'react';
import { useEffect, useState } from 'react';
import { SearchIcon, UserIcon, Heading, IconButton } from '@fravega-it/bumeran-ds-fvg';
import NavBar from '@components/content/NavBar';
import Content from '@components/content';
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
        <title>Frávega Template App</title>
      </Head>
      <NavBar />
      <Content/>
    </>
  );
}
