import React from "react";
import { Style } from "../../common/styled/Styled";

const header = () => {
  return (
    <>
      <Style.Wrapper sx="block lg:flex justify-between items-center">
        <Style.Text sx="header-title">User Details</Style.Text>
        <Style.Section sx="block sm:block md:flex lg:flex justify-center items-center gap-3">
          <Style.Button
            name="BLACKLIST USER"
            bg="bg-transparent"
            sx="border border-red-500 rounded-md bg-transparent"
            color="text-red-500"
          />
          <Style.Button
            name="ACTIVATE USER"
            bg="bg-transparent"
            sx="border border-[#39CDCC] rounded-md uppercase"
            color="text-[#39CDCC]"
          />
        </Style.Section>
      </Style.Wrapper>
    </>
  );
};

export default header;
