import React from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { useHistory } from 'react-router-dom';
import { Flex, Link, CardHero } from '@chia/core';
import { Button, Grid, Typography, Divider } from '@material-ui/core';
import useOpenExternal from '../../hooks/useOpenExternal';
import { Links as LinksIcon } from '@chia/icons';

const StyledLinksIcon = styled(LinksIcon)`
  font-size: 4rem;
`;

export default function LinksForksChiaExchange() {
  const history = useHistory();
  const openExternal = useOpenExternal();

  function LinksURLbuttonClickForksChiaExchange() {
            openExternal('https://forkschiaexchange.com');
        }

  return (
    <Grid container>
      <Grid xs={12} md={12} lg={12} item>
        <CardHero>

          <StyledLinksIcon color="primary" />

          <Typography variant="h5">
            <Trans>
              Forks Chia Exchange
            </Trans>
          </Typography>

          <Divider />

          <Typography variant="body1">
            <Trans>              
              {'The first Chia forks c2b exchanger. Applications are accepted around the clock'}
            </Trans>
          </Typography>

      <Flex gap={1}>
            <Button
              onClick={LinksURLbuttonClickForksChiaExchange}
              variant="contained"
              color="primary"
            >
              <Trans>Exchange Forks Now</Trans>
            </Button>

          </Flex>	  

        </CardHero>
      </Grid>
    </Grid>
  );
}
