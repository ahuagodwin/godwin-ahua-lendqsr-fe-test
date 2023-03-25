import React from "react";
import { Style } from "../../common/styled/Styled";

const header = () => {
  return (
    <>
      <Style.Wrapper sx="block sm:block md:flex lg:flex justify-between items-center  space-y-2 sm:space-y-0 md:space-y-0 lg:space-y-0">
        <Style.Text sx="header-title">User Details</Style.Text>
        <Style.Section sx="block sm:flex md:flex lg:flex justify-between items-center gap-3 space-y-3 sm:space-y-0 md:space-y-0 lg:space-y-0">
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
