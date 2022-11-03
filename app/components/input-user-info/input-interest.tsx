import styled from "styled-components";

export default function InputUserInterests({register}:any) {
  return (
    <UserInterests>
      <Header>
        관심 분야
      </Header> 
      <GridCheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox"  id="1" className="cb1" value="백엔드개발" />
          <Label htmlFor=""><CheckboxSpan>백엔드개발</CheckboxSpan></Label>
        </Gapcheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox" id="2" className="cb1" value="IOS" />
          <Label htmlFor="2"><CheckboxSpan>IOS</CheckboxSpan></Label>
        </Gapcheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox" id="3" className="cb1" value="Android" />
          <Label htmlFor="3"><CheckboxSpan>Android</CheckboxSpan></Label>
        </Gapcheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox" id="4" className="cb1" value="UX/UI" />
          <Label htmlFor="4"><CheckboxSpan>UX/UI</CheckboxSpan></Label>
        </Gapcheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox" id="5" className="cb1" value="BX" />
          <Label htmlFor="5"><CheckboxSpan>BX</CheckboxSpan></Label>
        </Gapcheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox" id="6" className="cb1" value="WEB개발" />
          <Label htmlFor="6"><CheckboxSpan>WEB개발</CheckboxSpan></Label>
        </Gapcheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox" id="7" className="cb1" value="기타디자인" />
          <Label htmlFor="7"><CheckboxSpan>기타디자인</CheckboxSpan></Label>
        </Gapcheckbox>
        <Gapcheckbox>
          <input {...register("checkbox")} type="checkbox" id="8" className="cb1" value="기타개발" />
          <Label htmlFor="8"><CheckboxSpan>기타개발</CheckboxSpan></Label>
        </Gapcheckbox>
      </GridCheckbox>
    </UserInterests>
  );
}
const UserInterests = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  grid-gap:19px;
  width: -webkit-fill-available;
`;
const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const GridCheckbox = styled.div`
  display:grid;
  grid-template-rows:1fr 1fr 1fr;
  grid-template-columns:1fr 1fr 1fr;
  justify-items:start;
  width: -webkit-fill-available;
`;
const Gapcheckbox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
const CheckboxSpan = styled.span`
  padding:9px;
`;
const Label = styled.label``;