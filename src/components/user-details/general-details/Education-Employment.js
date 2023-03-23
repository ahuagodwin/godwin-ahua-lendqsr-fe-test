import React from 'react'
import { Style } from '../../../common/styled/Styled'

const EducationEmployment = () => {
  return (
    <Style.Wrapper sx="border-b border-[#213F7D] border-opacity-[0.1] mb-3">
        <Style.Text sx="card__caption">Education and Employment</Style.Text>
    <Style.Section sx="user__person__card">
        <Style.Wrapper>
            <Style.Text>level of Education</Style.Text>
            <Style.Span>B.Sc</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>employment Status</Style.Text>
            <Style.Span>Employed</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>sector of employment</Style.Text>
            <Style.Span>FinTech</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>duration of employment</Style.Text>
            <Style.Span>2 Years</Style.Span>
        </Style.Wrapper>
    </Style.Section>

    <Style.Section sx="user__person__card">
        <Style.Wrapper>
            <Style.Text>office email</Style.Text>
            <Style.Span>godwin@lendqsr.com</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>monthly income</Style.Text>
            <Style.Span>₦ 400,000.00</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>Loan repayment</Style.Text>
            <Style.Span>₦ 40,000.00</Style.Span>
        </Style.Wrapper>
    </Style.Section>
    </Style.Wrapper>
  )
}

export default EducationEmployment