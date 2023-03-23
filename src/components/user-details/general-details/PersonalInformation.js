import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Loader from '../../../common/loader/Loader';
import { Style } from '../../../common/styled/Styled'
import { fetchAdminUserById, selectUser } from '../../../state/slice/User-Slice';

const PersonalInformation = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector(selectUser);
  
    useEffect(() => {
      dispatch(fetchAdminUserById(id));
    }, [dispatch, id]);
  
    if (loading) {
      return <div><Loader /></div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }


  return (
   <>
         <Style.Wrapper sx="border-b border-[#213F7D] border-opacity-[0.1] mb-3">
         <Style.Text sx="card__caption">Personal Information</Style.Text>
     <Style.Section sx="user__person__card">
         <Style.Wrapper>
             <Style.Text>Full Name</Style.Text>
             <Style.Span>{user?.profile?.firstName} {user?.profile?.lastName} </Style.Span>
         </Style.Wrapper>
         <Style.Wrapper>
             <Style.Text>Phone Number</Style.Text>
             <Style.Span>{user?.phoneNumber}</Style.Span>
         </Style.Wrapper>
         <Style.Wrapper>
             <Style.Text>Email Address</Style.Text>
             <Style.Span>{user?.email}</Style.Span>
         </Style.Wrapper>
         <Style.Wrapper>
             <Style.Text>BVN</Style.Text>
             <Style.Span>{user?.profile?.bvn}</Style.Span>
         </Style.Wrapper>
     </Style.Section>
 
     <Style.Section sx="user__person__card">
         <Style.Wrapper>
             <Style.Text>Marital Status</Style.Text>
             <Style.Span>Single</Style.Span>
         </Style.Wrapper>
         <Style.Wrapper>
             <Style.Text>Children</Style.Text>
             <Style.Span>None</Style.Span>
         </Style.Wrapper>
         <Style.Wrapper>
             <Style.Text>Type of resident</Style.Text>
             <Style.Span>rented apartment</Style.Span>
         </Style.Wrapper>
     </Style.Section>
     </Style.Wrapper>
   </>
  )
}

export default PersonalInformation