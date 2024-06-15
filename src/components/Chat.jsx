import Messages from "./Messages"
import Input from "./Input"

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>anali</span>
        <div className="chatIcons">
          <img src="" alt="s" />
          <img src="" alt="d" />
          <img src="" alt="a" />
        </div>
      </div>
        <Messages />
        <Input/>
    </div>
  )
}

export default Chat