import React from 'react'
import { Style } from '../../common/styled/Styled'

const Card = (props) => {
    const { data } = props;

  return (
    <>
    <Style.Wrapper sx="card__wrapper">
       {data.map((item, i) => (
         <Style.Card key={i} sx="card__container">
         {item.icon}
         <Style.Span>{item.label}</Style.Span>
         <Style.Text>{Number(item.total.toLocaleString())}</Style.Text>
     </Style.Card>
       ))}
    </Style.Wrapper>
    </>
  )
}

export default Card