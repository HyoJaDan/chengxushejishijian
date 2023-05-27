/** 3. 박스의 스타일을 지정  */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const myBlockStyleFn = (innercontent: any) => {
  const type = innercontent.getType();

  if (type === 'h1') {
    return 'headerFont';
  }
  if (type === 'code-block') {
    return 'code-block-css';
  }
  if (type === 'unstyled') {
    return 'my-custom-block-style';
  }
  return null;
};
