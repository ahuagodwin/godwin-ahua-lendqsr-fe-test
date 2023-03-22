import React from 'react';
import { user__card__overview } from '../../common/data/data';
import { Style } from '../../common/styled/Styled';
import { OverviewCard, Table } from '../../components';

const Overview = () => {
  return (
    <>
      
      <Style.Wrapper>
          <OverviewCard data={user__card__overview}/>
          <Table />
      </Style.Wrapper>

    </>
  )
}

export default Overview