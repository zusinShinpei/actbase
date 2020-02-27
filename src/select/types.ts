import { InputProps } from '../inputs/types';
import React from 'react';

export interface SelectProps extends InputProps {
  options?: OptionProps[];
  children?: React.ReactElement<OptionProps> | React.ReactElement<OptionProps>[];
}

export interface OptionProps {
  value?: any;
  children?: React.ReactNode;
  view?: React.ReactNode;
}
