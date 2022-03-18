import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as LinksIcon } from './images/links.svg';

export default function Links(props: SvgIconProps) {
  return <SvgIcon component={LinksIcon} viewBox="0 0 32 32" {...props} />;
}
