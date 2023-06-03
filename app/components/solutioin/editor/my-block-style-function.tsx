/* eslint-disable @typescript-eslint/no-explicit-any */

const Image = ({ src, style }: { src: any; style: any }) => {
  return <img src={src} alt='img' style={style} />;
};
const Media = (props: {
  contentState: { getEntity: (arg0: any) => any };
  block: { getEntityAt: (arg0: number) => any };
}) => {
  const { block, contentState } = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src, style } = entity.getData();
  const type = entity.getType();
  let media;
  if (type === 'image') {
    media = <Image src={src} style={style} />;
  }
  return media;
};

/** 3. 박스의 스타일을 지정  */
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
  if (type === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
};
