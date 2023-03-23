import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../../common/loader/Loader';
import { Style } from '../../../common/styled/Styled'
import { Icons } from '../../../constant/Icons'
import { fetchAdminUserById, selectUser } from '../../../state/slice/User-Slice';

const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector(selectUser);
  
    useEffect(() => {
      dispatch(fetchAdminUserById(id));
    }, [dispatch, id]);

  
  return (
    <>
           {loading ? ( <Loader /> ) : error ? (<div>Error: {error}</div>) : (
            <Style.Section sx="user__card__wrapper">
            <Style.Wrapper sx="user__card__info">
                <Style.Img img={user?.profile?.avatar} sx="user__profile__img" />
            <Style.Section>
                <Style.Text>{user?.profile?.firstName} {user?.profile?.lastName}</Style.Text>
                <Style.Span>{user?.profile?.address}</Style.Span>
            </Style.Section>
            </Style.Wrapper>

            <Style.Section>
                <Style.Span>User's Tier</Style.Span>
                <Icons.LendqsrUserRating />
            </Style.Section>

            <Style.Section>
                <Style.Text>₦ {user?.accountBalance}</Style.Text>
                <Style.Span>{user?.accountNumber}</Style.Span>
            </Style.Section>
        </Style.Section>
           )}
    </>
  )
}

export default Profile