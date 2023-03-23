import React from "react";
import GeneralDetails from "./GeneralDetails";
import { Style } from "../../common/styled/Styled";
import Tab from "../tab/Tab";
import { UserProfile } from "./general-details";

const HederCard = () => {
  const tabs = [
    { label: "General Details", content: <GeneralDetails /> },
    { label: "Document", content: <p>Lendqsr Document</p> },
    { label: "Bank Details", content: <p>Lendqsr Bank Details</p> },
    { label: "Loan", content: <p>Lendqsr Loan</p> },
    { label: "Saving", content: <p>Lendqsr Saving</p> },
    { label: "App and System", content: <p>Lendqsr App and System</p> },
  ];

  return (
    <>
      <Style.Wrapper>
        <UserProfile />
        {/* tabs */}
        <Style.Section>
          <Tab tabs={tabs} initialTab={0} />
        </Style.Section>
      </Style.Wrapper>
    </>
  );
};

export default HederCard;
