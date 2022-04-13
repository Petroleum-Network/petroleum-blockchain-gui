import React from 'react';
import { Trans } from '@lingui/macro';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router';
import { Grid, List, Divider, ListItem, ListItemText, Box, Tooltip, Typography } from '@material-ui/core';

import {
  // FormatBytes,
  FormatLargeNumber,
  Flex,
  Card,
  Loading,
  StateColor,
  Table,
} from '@chia/core';
import NewsCards from './NewsCards'
import LayoutMain from '../layout/LayoutMain';
export default function News() {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <LayoutMain title={<Trans>Petroleum News</Trans>}>
      <Flex gap={1}>
        <Typography variant="h5" gutterBottom>
          <Trans>Petroleum News</Trans>
        </Typography>
      </Flex>
      <Flex flexDirection="column" gap={3}>
        < NewsCards />
        {/* 
        <BlocksCard />
        <FullNodeConnections /> */}
      </Flex>
    </LayoutMain>

  );
}
