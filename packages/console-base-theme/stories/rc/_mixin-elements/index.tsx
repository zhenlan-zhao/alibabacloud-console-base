import _map from 'lodash/map';
import _reduce from 'lodash/reduce';
import _kebabCase from 'lodash/kebabCase';
import React, {
  useMemo
} from 'react';
import styled, {
  FlattenSimpleInterpolation
} from 'styled-components';

import * as WHOLE from '../../../src';

interface IProps {
  reg: RegExp;
  regNot?: RegExp;
  extra?: FlattenSimpleInterpolation;
}

interface IScProps {
  extra?: FlattenSimpleInterpolation;
  mixin: FlattenSimpleInterpolation;
}

const ScItem = styled.div<IScProps>`
  ${props => props.extra}
  ${props => props.mixin}
`;

export default function MixinElements({
  reg,
  regNot,
  extra
}: IProps): JSX.Element {
  const THE_MIXIN_MAP = useMemo(() => _reduce(WHOLE, (result: Record<string, FlattenSimpleInterpolation>, v: unknown, k: string) => {
    if (reg.test(k) && (!regNot || !regNot.test(k))) {
      result[_kebabCase(RegExp.$1)] = v as FlattenSimpleInterpolation;
    }
    
    return result;
  }, {}), [reg, regNot]);
  
  return <>
    {_map(THE_MIXIN_MAP, (v, k) => <ScItem extra={extra} key={k} mixin={v}>{k}</ScItem>)}
  </>;
}
