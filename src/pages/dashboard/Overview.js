import React from 'react';
import { user__card__overview } from '../../common/data/data';
import { Style } from '../../common/styled/Styled';
import { DashboardLayout, OverviewCard, Table } from '../../components';


const Overview = () => {

  return (
    <>
      <DashboardLayout>
      <Style.Wrapper>
          <OverviewCard data={user__card__overview}/>
          <Table />
        </Style.Wrapper>
      </DashboardLayout>
    
    </>
  )
}

export default Overview