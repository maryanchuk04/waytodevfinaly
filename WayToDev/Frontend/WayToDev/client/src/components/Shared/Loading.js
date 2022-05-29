import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import HashLoader from 'react-spinners/HashLoader';

function Loading({loading, styles, hash}) {
  const override = `
    position: absolute;
    background-color: rgb(166 166 166 / 82%);
    display: flex;
    align-items: center;
    justify-content: center;
    ${styles}
  `;

  return (
    hash
      ? <HashLoader color="#11324D" loading={loading} size={60} css={override} />
      : <SyncLoader color="#11324D" loading={loading} size={15} css={override} />
  )
}

export default Loading