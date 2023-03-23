import React from "react";
import {
  DashboardLayout,
  DetailsHeader,
  UserDetailsHeaderCard,
} from "../../components";
import { Icons } from "../../constant/Icons";

const UserDetails = () => {
  return (
    <>
      <DashboardLayout path="/dashboard/user" icon={<Icons.LendqsrArrowLeft />}>
        <DetailsHeader />
        <UserDetailsHeaderCard />
      </DashboardLayout>
    </>
  );
};

export default UserDetails;
