import React from 'react';
import Link from 'next/link';

const CancelPage = () => {
  return (
    <>
      <h1>Canceled.</h1>

      <Link href="/">
        <a>Go back</a>
      </Link>
    </>
  );
};

export default CancelPage;
