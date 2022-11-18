import type { FC, HTMLProps, ReactNode, PropsWithChildren } from 'react';

/* export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
}; */

/** Function Comopnent with children prop */
export type FCChildren<P = unknown> = FC<PropsWithChildren<P>>;
// Function Component with className prop
export type FCClass<P = unknown> = FC<HTMLProps<HTMLElement> & P>;
// Function Component with children and className props
export type FCAll<P = unknown> = FCClass<PropsWithChildren<P>>;

/* 
  공부하다가 PropsWithChildren을 알아보았습니다. 그 후 타입을 봤는데
  type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined }
  로 되있는걸 봤습니다. 이러면 children이 존재하지 않아도 오류가 발생할 수 있기에 
  StrictPropsWithChildren 를 만들어 적용시켜보았습니다.... ㅠㅠ 무섭습니다 
*/
