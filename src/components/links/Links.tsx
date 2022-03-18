import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import LayoutMain from '../layout/LayoutMain';
import { Trans } from '@lingui/macro';
import { Flex } from '@chia/core';
import { Grid, Typography } from '@material-ui/core';

//import LinksThirdPartyLinks from './LinksThirdPartyLinks';
import LinksPetroleumWebsite from './LinksPetroleumWebsite';
import LinksPetroleumDiscord from './LinksPetroleumDiscord';
import LinksPetroleumTwitter from './LinksPetroleumTwitter';
import LinksChiaForksCalculator from './LinksChiaForksCalculator';
import LinksChiaForksBlockchain from './LinksChiaForksBlockchain';
import LinksForksChiaExchange from './LinksForksChiaExchange';
import LinksChiaForkSpace from './LinksChiaForkSpace';
import { LinksHeaderTarget } from './LinksHeader';
import { LinksHeaderSource } from './LinksHeader';

export default function Links() {

  const { path } = useRouteMatch();

  return (

    <LayoutMain 
		
      title={
        <>
          <Trans>Petroleum Links</Trans>
		  <LinksHeaderTarget />
        </>
      }
	>	

		<>	
		<Flex flexDirection="column" gap={1} alignItems="center">

			<Switch>

			  <Route path={path} exact>
				<div>

				  <Grid container spacing={4} alignItems="stretch">

				    <Grid item xs={12} sm={6} md={6}>
					  <LinksPetroleumWebsite headerTag={LinksHeaderSource} />
					</Grid>

					<Grid item xs={12} sm={6} md={6}>
					  <LinksPetroleumDiscord headerTag={LinksHeaderSource} />
					</Grid>

				  	<Grid item xs={12} sm={6} md={6}>
					  <LinksPetroleumTwitter headerTag={LinksHeaderSource} />
					</Grid>

					<Grid item xs={12} sm={6} md={6}>
					  <LinksChiaForksCalculator headerTag={LinksHeaderSource} />
					</Grid>

					<Grid item xs={12} sm={6} md={6}>
					  <LinksChiaForksBlockchain headerTag={LinksHeaderSource} />
					</Grid>

					<Grid item xs={12} sm={6} md={6}>
					  <LinksForksChiaExchange headerTag={LinksHeaderSource} />
					</Grid>

					<Grid item xs={12} sm={6} md={6}>
					  <LinksChiaForkSpace headerTag={LinksHeaderSource} />
					</Grid>

				  </Grid>

				</div>

			  </Route>

			</Switch>

		</Flex>	     
		</> 

    </LayoutMain>
  );
}
