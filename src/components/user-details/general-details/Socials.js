import React from 'react'
import { Style } from '../../../common/styled/Styled'

const Socials = () => {
  return (
    <Style.Wrapper sx="border-b border-[#213F7D] border-opacity-[0.1] mb-3">
        <Style.Text sx="card__caption">Socials</Style.Text>
    <Style.Section sx="user__person__card">
        <Style.Wrapper>
            <Style.Text>twitter</Style.Text>
            <Style.Span>Godwin Ahua Chidi</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>facebook</Style.Text>
            <Style.Span>08138885517</Style.Span>
        </Style.Wrapper>
        <Style.Wrapper>
            <Style.Text>instagram</Style.Text>
            <Style.Span>godwincahua@gmail.com</Style.Span>
        </Style.Wrapper>
    </Style.Section>

    </Style.Wrapper>
  )
}

export default Socials