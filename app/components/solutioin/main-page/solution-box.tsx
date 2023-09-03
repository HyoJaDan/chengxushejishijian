import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import { Link } from '@remix-run/react';
import { EditorState } from 'draft-js';
import styled from 'styled-components';
import { convertJsonToDraft } from '~/hooks/convert-json-to-draft';
import type { ISolutions } from '~/models/solutions';
import { myBlockStyleFn } from '../editor/my-block-style-function';

const resizeablePlugin = createResizeablePlugin();
const decorator = composeDecorators(resizeablePlugin.decorator);
const imagePlugin = createImagePlugin({ decorator });
const plugins = [imagePlugin, resizeablePlugin];

export const SolutionBox = (data: ISolutions, index: number, width: number) => {
  const { id, description, title, createdAt, solutionId } = data;
  const keyId = `${index}_${id}`;
  const maxWidth = Math.floor((width - 48) / 3);
  console.log('22222222', description);
  const restoredContentState = convertJsonToDraft(description);
  const restoredEditorState =
    EditorState.createWithContent(restoredContentState);

  return (
    <Box to={`/solution/${solutionId}`} key={keyId} maxwidth={maxWidth}>
      <Content className='body2_BD'>
        <Editor
          editorState={restoredEditorState}
          blockStyleFn={myBlockStyleFn}
          plugins={plugins}
        />
      </Content>
      <TeskInformaion>
        <Header>
          <Title className='body1_BD'>{title}</Title>
        </Header>
      </TeskInformaion>
    </Box>
  );
};

const Box = styled(Link)<{ maxwidth: number }>`
  width: ${(prop) => `${prop.maxwidth}px`};
  height: 309px;
  background: ${(prop) => prop.theme.color.basic.white};
  border: 1px solid #efedea;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;
const Content = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_900};
  background-color: #f0fbff;
  height: 200px;
  overflow: hidden;
  padding: 24px;
`;

const TeskInformaion = styled.div`
  height: 109px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  width: fit-content;
  height: 29px;
  background: #dfffcc;
  border-radius: 4px;
  color: #429510;
`;
const Header = styled.div`
  display: flex;
  gap: 8px;
`;
const Title = styled.div`
  color: ${(prop) => prop.theme.color.grayScale.gray_800};
`;
