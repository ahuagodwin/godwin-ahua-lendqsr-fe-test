import React from 'react'
import  GeneralDetails  from './GeneralDetails';
import { Style } from '../../common/styled/Styled'
import { Icons } from '../../constant/Icons'
import Tab from '../tab/Tab'

const HederCard = () => {

    const tabs = [
        { label: 'General Details', content: <GeneralDetails /> },
        { label: 'Document', content: <p>Lendqsr Document</p> },
        { label: 'Bank Details', content: <p>Lendqsr Bank Details</p> },
        { label: 'Loan', content: <p>Lendqsr Loan</p> },
        { label: 'Saving', content: <p>Lendqsr Saving</p> },
        { label: 'App and System', content: <p>Lendqsr App and System</p> },
      ];

  return (
    <>
        <Style.Wrapper>
            <Style.Section sx="user__card__wrapper">
                <Style.Wrapper sx="user__card__info">
                    <Icons.LendqsrUserAvatar />
                <Style.Section>
                    <Style.Text>Godwin Ahua</Style.Text>
                    <Style.Span>LSQFf587g90</Style.Span>
                </Style.Section>
                </Style.Wrapper>

                <Style.Section>
                    <Style.Span>User's Tier</Style.Span>
                    <Icons.LendqsrUserRating />
                </Style.Section>

                <Style.Section>
                    <Style.Text>₦200,000.00</Style.Text>
                    <Style.Span>LSQFf587g90</Style.Span>
                </Style.Section>
            </Style.Section>

            {/* tabs */}
            <Style.Section >
                <Tab tabs={tabs} initialTab={0}/>
            </Style.Section>

        </Style.Wrapper>
    </>
  )
}

export default HederCard