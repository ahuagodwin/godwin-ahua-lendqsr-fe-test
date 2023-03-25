import React from 'react';
import { user__card__overview } from '../../common/data/data';
import { MetaTag } from '../../common/meta-tag/MetaTag';
import { Style } from '../../common/styled/Styled';
import { DashboardLayout, OverviewCard, Table } from '../../components';


const Overview = () => {

  return (
    <>
     <MetaTag title="Godwin Lendqsr Assessment | Dashboard"  desc="description"
      content="loan, saving, organization, customers, businesses, saving products, loan request, preference, karma, decision model, guarantor"
    />
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