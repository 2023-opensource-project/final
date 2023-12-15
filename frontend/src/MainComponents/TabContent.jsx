import React from "react";
import { Table, Th, Td } from "./SecondSection.style";

function TabContent({ filteredData }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>현재 프로세스</Th>
          <Th>회사명</Th>
          <Th>직무</Th>
          <Th>마감일</Th>
          <Th>작성일</Th>
          <Th>이력서 자료</Th>
          <Th>자기소개서 자료</Th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.Id}>
            <Td>{item.CurrentProcess}</Td>
            <Td>{item.CompanyName}</Td>
            <Td>{item.Position}</Td>
            <Td>{item.Deadline}</Td>
            <Td>{item.SubmissionDate}</Td>
            <Td>{item.ResumeMaterial}</Td>
            <Td>{item.CoverLetterMaterial}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TabContent;
