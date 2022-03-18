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

export default function LinksChiaForksBlockchain() {
  const history = useHistory();
  const openExternal = useOpenExternal();

  function LinksURLbuttonClickChiaForksBlockchain() {
            openExternal('https://chiaforksblockchain.com');
        }
		
  return (
    <Grid container>
      <Grid xs={12} md={12} lg={12} item>
        <CardHero>

          <StyledLinksIcon color="primary" />

          <Typography variant="h5">
            <Trans>
              Chia Forks Blockchain
            </Trans>
          </Typography>

          <Divider />

          <Typography variant="body1">
            <Trans>              
              {'Tired of waiting for forks to sync? Download the blockchain files here'}
            </Trans>
          </Typography>

      <Flex gap={1}>
            <Button
              onClick={LinksURLbuttonClickChiaForksBlockchain}
              variant="contained"
              color="primary"
            >
              <Trans>Visit Chia Forks Blockchain</Trans>
            </Button>

          </Flex>	  

        </CardHero>
      </Grid>
    </Grid>
  );
}
