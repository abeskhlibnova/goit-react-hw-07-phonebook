import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#1abc9c"
        ariaLabel="three-dots-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>
  );
}
