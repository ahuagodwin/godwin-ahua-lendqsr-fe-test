import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Style } from "../../../common/styled/Styled";
import {
  fetchAdminUserById,
  selectUser,
} from "../../../state/slice/User-Slice";

const Guarantor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchAdminUserById(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
       <div></div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <Style.Wrapper sx="border-b border-[#213F7D] border-opacity-[0.1] mb-3">
          <Style.Text sx="card__caption">Guarantor</Style.Text>
          <Style.Section sx="user__person__card">
            <Style.Wrapper>
              <Style.Text>Full Name</Style.Text>
              <Style.Span>
                {user?.guarantor?.firstName} {user?.guarantor?.lastName}
              </Style.Span>
            </Style.Wrapper>
            <Style.Wrapper>
              <Style.Text>Phone Number</Style.Text>
              <Style.Span>{user?.guarantor?.phoneNumber}</Style.Span>
            </Style.Wrapper>
            <Style.Wrapper>
              <Style.Text>Email Address</Style.Text>
              <Style.Span>godwincahua@gmail.com</Style.Span>
            </Style.Wrapper>
            <Style.Wrapper>
              <Style.Text>relationship</Style.Text>
              <Style.Span>Brother</Style.Span>
            </Style.Wrapper>
          </Style.Section>

          <Style.Section sx="user__person__card">
            <Style.Wrapper>
              <Style.Text>Full Name</Style.Text>
              <Style.Span>
                {user?.guarantor?.firstName} {user?.guarantor?.lastName}
              </Style.Span>
            </Style.Wrapper>
            <Style.Wrapper>
              <Style.Text>Phone Number</Style.Text>
              <Style.Span>{user?.guarantor?.phoneNumber}</Style.Span>
            </Style.Wrapper>
            <Style.Wrapper>
              <Style.Text>Email Address</Style.Text>
              <Style.Span>godwincahua@gmail.com</Style.Span>
            </Style.Wrapper>
            <Style.Wrapper>
              <Style.Text>relationship</Style.Text>
              <Style.Span>Brother</Style.Span>
            </Style.Wrapper>
          </Style.Section>
        </Style.Wrapper>
      )}
    </>
  );
};

export default Guarantor;
