import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import styled from 'styled-components';
import PriceChart from './PriceChart'

const CharGrid = styled.div`
display: grid;
margin-top: 20px;
grid-gap: 15px;
grid-template-columns: 1fr 3fr;
`

export default function Index() {
    return (
        <Page name="dashboard">
            <PriceGrid />
            <CharGrid>
            <CoinSpotlight/>
            <PriceChart />
            </CharGrid>
        </Page>
    )
}
