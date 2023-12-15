import { useState } from "react";
import Chat from "./Chat";
import chatIcon from "./ChatGPT_logo.svg";

function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <button
        style={{
          borderRadius: "50%",
          broder: "1px solid black",
          width: "40px",
          height: "40px",
          backgroundImage: `url(${chatIcon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => setOpen(!open)}
      />
      {open && <Chat />}
    </div>
  );
}

export default ChatButton;
