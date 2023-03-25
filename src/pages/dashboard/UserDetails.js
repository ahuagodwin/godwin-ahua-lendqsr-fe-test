import React from "react";
import { MetaTag } from "../../common/meta-tag/MetaTag";
import {
  DashboardLayout,
  DetailsHeader,
  UserDetailsHeaderCard,
} from "../../components";
import { Icons } from "../../constant/Icons";

const UserDetails = () => {
  return (
    <>
    <MetaTag title="Godwin Lendqsr Assessment | User Details"  desc="description"
      content="loan, saving, organization, customers, businesses, saving products, loan request, preference, karma, decision model, guarantor"
    />
      <DashboardLayout path="/dashboard/user" icon={<Icons.LendqsrArrowLeft />}>
        <DetailsHeader />
        <UserDetailsHeaderCard />
      </DashboardLayout>
    </>
  );
};

export default UserDetails;
