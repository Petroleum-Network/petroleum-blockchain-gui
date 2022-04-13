import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as PetroleumIcon } from './images/petroleum_circle.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={PetroleumIcon} viewBox="0 0 32 32" {...props} />;
}
