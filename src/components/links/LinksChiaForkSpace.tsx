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

export default function LinksChiaForkSpace() {
  const history = useHistory();
  const openExternal = useOpenExternal();

  function LinksURLbuttonClickChiaForkSpace() {
            openExternal('https://chiafork.space');
        }
		
  return (
    <Grid container>
      <Grid xs={12} md={12} lg={12} item>
        <CardHero>

          <StyledLinksIcon color="primary" />

          <Typography variant="h5">
            <Trans>
              Chia Fork Space
            </Trans>
          </Typography>

          <Divider />

          <Typography variant="body1">
            <Trans>              
              {'Don\'t miss the new fork coins. Join today and be the first to be informed of Chia Forks news.'}
            </Trans>
          </Typography>

      <Flex gap={1}>
            <Button
              onClick={LinksURLbuttonClickChiaForkSpace}
              variant="contained"
              color="primary"
            >
              <Trans>Visit Chia Fork Space</Trans>
            </Button>

          </Flex>	  

        </CardHero>
      </Grid>
    </Grid>
  );
}
