import React from "react";
import { Style } from "../styled/Styled";

const Loader = () => {
  return (
    <>
      <Style.Wrapper sx="animate-pulse flex justify-center items-center">
        <Style.Text sx="h-2 w-36 bg-slate-700 rounded space-y-3"></Style.Text>
      </Style.Wrapper>
    </>
  );
};

export default Loader;
