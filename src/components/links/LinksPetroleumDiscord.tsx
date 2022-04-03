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

export default function LinksPetroleumDiscord() {
  const history = useHistory();
  const openExternal = useOpenExternal();

  function LinksURLbuttonClickPetroleumDiscord() {
            openExternal('https://discord.gg/7bFQxmtjHx');
        }
		
  return (
    <Grid container>
      <Grid xs={12} md={12} lg={12} item>
        <CardHero>

          <StyledLinksIcon color="primary" />

          <Typography variant="h5">
            <Trans>
              Petroleum on Discord
            </Trans>
          </Typography>

          <Divider />

          <Typography variant="body1">
            <Trans>              
              {'Don\'t miss news from the Petroleum fork team. Join the Discord for more information'}
            </Trans>
          </Typography>

      <Flex gap={1}>
            <Button
              onClick={LinksURLbuttonClickPetroleumDiscord}
              variant="contained"
              color="primary"
            >
              <Trans>Join Petroleum on Discord</Trans>
            </Button>

          </Flex>	  

        </CardHero>
      </Grid>
    </Grid>
  );
}
