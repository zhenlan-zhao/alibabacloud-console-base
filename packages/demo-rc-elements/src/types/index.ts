import {
  HTMLAttributes
} from 'react';

import {
  CodeMirrorProps
} from '@alicloud/rc-codemirror';

export interface IPropsCodeViewer extends CodeMirrorProps {
  type?: 'json' | 'js' | 'ts' | 'html' | 'css' | 'less' | 'text';
  children?: string;
}

export interface IPropsCodeViewerSimple extends Omit<IPropsCodeViewer, 'type'> {}

export interface IPropsPreJson extends Omit<IPropsCodeViewerSimple, 'children'> {
  o?: unknown;
}

export interface IPropsPrePromise extends Omit<IPropsCodeViewerSimple, 'children'> {
  promise?: Promise<unknown> | null;
}

export interface IPropsList extends HTMLAttributes<Element> {
  ordered?: boolean;
}

export interface IChoiceItem<T> {
  value: T;
  label: string | JSX.Element;
}

export interface IPropsChoiceGroup<T, V = T> {
  label?: string | JSX.Element;
  items: IChoiceItem<T>[];
  value?: V;
  defaultValue?: V;
  onChange?(value: V): void;
}

export interface IPropsFlex100HBF {
  header?: string | JSX.Element;
  body?: string | JSX.Element;
  footer?: string | JSX.Element;
}

export type TPropsCheckboxGroup<T> = IPropsChoiceGroup<T, T[]>;

export type TPropsRadioGroup<T> = IPropsChoiceGroup<T, T>;
