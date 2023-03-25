import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Style } from "../../../common/styled/Styled";
import {
  fetchAdminUserById,
  selectUser,
} from "../../../state/slice/User-Slice";

const EducationEmployment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchAdminUserById(id));
  }, [dispatch, id]);


  return (
   <>
    {loading ? (<></>) : error ? (<div>Error {error}</div>) : (
         <Style.Wrapper sx="border-b border-[#213F7D] border-opacity-[0.1] mb-3">
         <Style.Text sx="card__caption">Education and Employment</Style.Text>
         <Style.Section sx="user__person__card">
           <Style.Wrapper>
             <Style.Text>level of Education</Style.Text>
             <Style.Span>{user?.education?.level}</Style.Span>
           </Style.Wrapper>
           <Style.Wrapper>
             <Style.Text>employment Status</Style.Text>
             <Style.Span>{user?.education?.employmentStatus}</Style.Span>
           </Style.Wrapper>
           <Style.Wrapper>
             <Style.Text>sector of employment</Style.Text>
             <Style.Span>{user?.education?.sector}</Style.Span>
           </Style.Wrapper>
           <Style.Wrapper>
             <Style.Text>duration of employment</Style.Text>
             <Style.Span>{user?.education?.duration}</Style.Span>
           </Style.Wrapper>
         </Style.Section>
   
         <Style.Section sx="user__person__card">
           <Style.Wrapper>
             <Style.Text>office email</Style.Text>
             <Style.Span>{user?.education?.officeEmail}</Style.Span>
           </Style.Wrapper>
           <Style.Wrapper>
             <Style.Text>monthly income</Style.Text>
             <Style.Span>₦ {user?.education?.monthlyIncome[0]}</Style.Span>
           </Style.Wrapper>
           <Style.Wrapper>
             <Style.Text>Loan repayment</Style.Text>
             <Style.Span>₦ {user?.education?.loanRepayment}</Style.Span>
           </Style.Wrapper>
         </Style.Section>
       </Style.Wrapper>
    )}
   </>
  );
};

export default EducationEmployment;
