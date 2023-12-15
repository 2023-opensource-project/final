import { React } from "react";
import { TextStyle } from "../Constants/style";
import { TabCon, TabNew } from "./MasterCoverLetter.style";
import { Textarea } from "./Common";
import { tabTitles, tabTitle2 } from "./TabContents";

function TabTitleContainer({ activeTab, tabContents, textLength, handleTabClick, handleInputChange }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {tabTitles.map((title, index) => (
          <TabCon key={index}>
            <TabNew onClick={() => handleTabClick(index)} active={activeTab === index}>
              {title}
            </TabNew>
          </TabCon>
        ))}
      </div>
      {
        <TextStyle textAlign="left" fontWeight="500" margin="10px 0">
          ORIGIN {tabTitle2[activeTab]}
        </TextStyle>
      }

      <Textarea name="content" value={tabContents[activeTab]} onChange={handleInputChange} />

      <div style={{ marginTop: "5px" }}>
        <TextStyle textAlign="right" fontSize="11px">
          글자 수 세기: {textLength}자
        </TextStyle>
      </div>
    </div>
  );
}

export default TabTitleContainer;
