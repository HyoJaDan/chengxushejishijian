import type { FC, HTMLProps, PropsWithChildren } from 'react';

/** Function Comopnent with children prop */
export type FCChildren<P = unknown> = FC<PropsWithChildren<P>>;
// Function Component with className prop
export type FCClass<P = unknown> = FC<HTMLProps<HTMLElement> & P>;
// Function Component with children and className props
export type FCAll<P = unknown> = FCClass<PropsWithChildren<P>>;
