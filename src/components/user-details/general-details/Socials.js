import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Style } from '../../../common/styled/Styled'
import { fetchAdminUserById, selectUser } from '../../../state/slice/User-Slice';

const Socials = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector(selectUser);
  
    useEffect(() => {
      dispatch(fetchAdminUserById(id));
    }, [dispatch, id]);


  return (
   <>
    {loading ? (<div></div>) : error ? (<div>Error {error}</div>) : (
         <Style.Wrapper sx="border-b border-[#213F7D] border-opacity-[0.1] mb-3">
         <Style.Text sx="card__caption">Socials</Style.Text>
     <Style.Section sx="user__person__card">
         <Style.Wrapper>
             <Style.Text>twitter</Style.Text>
             <Style.Span>{user?.socials?.twitter}</Style.Span>
         </Style.Wrapper>
         <Style.Wrapper>
             <Style.Text>facebook</Style.Text>
             <Style.Span>{user?.socials?.facebook}</Style.Span>
         </Style.Wrapper>
         <Style.Wrapper>
             <Style.Text>instagram</Style.Text>
             <Style.Span>{user?.socials?.instagram}</Style.Span>
         </Style.Wrapper>
     </Style.Section>
 
     </Style.Wrapper>
    )}
   </>
  )
}

export default Socials