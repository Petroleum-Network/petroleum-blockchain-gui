import React from 'react';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '@material-ui/core';
import {
  Wallet as WalletIcon,
  Farm as FarmIcon,
  Keys as KeysIcon,
  Home as HomeIcon,
  Plot as PlotIcon,
  Pool as PoolIcon,
  News as NewsIcon,
  Settings as SettingsIcon,
  Stake as StakeIcon,
  Links as LinksIcon,
} from '@chia/icons';
import { Flex, SideBarItem } from '@chia/core';
import { logOut } from '../../modules/message';
import { RootState } from '../../modules/rootReducer';

const StyledRoot = styled(Flex)`
  height: 100%;
  overflow-y: auto;
`;

const StyledList = styled(List)`
  width: 100%;
`;

export default function DashboardSideBar() {
  const dispatch = useDispatch();
  const { passphrase_support_enabled: passphraseSupportEnabled } = useSelector((state: RootState) => state.keyring_state);

  function handleLogOut() {
    dispatch(logOut('log_out', {}));
  }

  return (
    <StyledRoot>
      <StyledList disablePadding>
        <SideBarItem
          to="/dashboard/news"
          icon={<NewsIcon fontSize="large" />}
          title={<Trans>News</Trans>}
          exact
        />
        <SideBarItem
          to="/dashboard"
          icon={<HomeIcon fontSize="large" />}
          title={<Trans>Full Node</Trans>}
          exact
        />
        <SideBarItem
          to="/dashboard/wallets"
          icon={<WalletIcon fontSize="large" />}
          title={<Trans>Wallets</Trans>}
        />
        <SideBarItem
          to="/dashboard/plot"
          icon={<PlotIcon fontSize="large" />}
          title={<Trans>Plots</Trans>}
        />
        <SideBarItem
          to="/dashboard/farm"
          icon={<FarmIcon fontSize="large" />}
          title={<Trans>Farm</Trans>}
        />
        <SideBarItem
          to="/dashboard/pool"
          icon={<PoolIcon fontSize="large" />}
          title={<Trans>Pool</Trans>}
        />
        <SideBarItem
          to="/dashboard/stake"
          icon={<StakeIcon fontSize="large" />}
          title={<Trans>Stake</Trans>}
        />
        <SideBarItem
          to="/dashboard/links"
          icon={<LinksIcon fontSize="large" />}
          title={<Trans>Links</Trans>}
        />
        <SideBarItem
          to="/"
          icon={<KeysIcon fontSize="large" />}
          onSelect={handleLogOut}
          title={<Trans>Keys</Trans>}
          exact
        />
        { passphraseSupportEnabled &&
          <SideBarItem
            to="/dashboard/settings"
            icon={<SettingsIcon fontSize="large" />}
            title={<Trans>Settings</Trans>}
          />
        }
      </StyledList>
    </StyledRoot>
  );
}
