import Image from 'next/image';
import React from 'react';

function Loading() {
  return (
    <div>
      <Image src={'/icons/loading.gif'} alt="Loading..." width={150} height={75} />
    </div>
  );
}

export default Loading;
