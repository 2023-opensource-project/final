import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 40px 0;
  flex-wrap: wrap;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 20px;
  background-color: #fafafa;
  font-size: 14px;
`;
export const Th = styled.th`
  height: 30px;
  padding: 5px;
  text-align: center;
  border-bottom: 3px double #dedede;
  font-weight: 400;
`;
export const Td = styled.td`
  height: 25px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #dedede;
  font-weight: 300;
`;
