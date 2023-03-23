import React from "react";
import { Style } from "../../common/styled/Styled";

const header = () => {
  return (
    <>
      <Style.Wrapper sx="block lg:flex justify-between items-center">
        <Style.Text>User Details</Style.Text>
        <Style.Section sx="flex justify-center items-center gap-3">
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
