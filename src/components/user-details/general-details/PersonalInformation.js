import React from 'react'
import { Style } from '../../../common/styled/Styled'

const PersonalInformation = () => {
  return (
    <Style.Wrapper sx="border-b border-[#213F7D] border-opacity-[0.1] mb-3">
        <Style.Text sx="card__caption">Personal Information</Style.Text>
    <Style.Section sx="user__person__card">
        <Style.Wrapper>
            <Style.Text>Full Name</Style.Text>
            <Style.Span>Godwin Ahua Chidi</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>Phone Number</Style.Text>
            <Style.Span>08138885517</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>Email Address</Style.Text>
            <Style.Span>godwincahua@gmail.com</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>BVN</Style.Text>
            <Style.Span>08138885517</Style.Span>
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
  )
}

export default PersonalInformation