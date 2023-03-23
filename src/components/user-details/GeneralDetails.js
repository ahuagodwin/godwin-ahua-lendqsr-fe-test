import React from 'react'
import { Style } from '../../common/styled/Styled';
import { EducationEmployment, PersonalInformation } from './general-details';


const GeneralDetals = () => {
  return (
    <Style.Wrapper sx="user__person__card__wrapper">
        <PersonalInformation />
        <EducationEmployment />
    </Style.Wrapper>
  )
}

export default GeneralDetals