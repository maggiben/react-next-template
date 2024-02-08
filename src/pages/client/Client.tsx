import React, { useEffect, useState } from 'react';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import pjson from '@pjson';
import Head from 'next/head';
import Legajo from '@components/Legajo/Legajo';

export default function Client(): JSX.Element {
  const [showFooter, setShowFooter] = useState<boolean>(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'A' && event.shiftKey) {
        showFooter ? setShowFooter(false) : setShowFooter(true);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

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
      <Legajo />
      { showFooter && <Footer /> }
    </>
  );
}
