import { MessageIcon } from '../common/Icons'

function FloatingChatButton() {
  return (
    <button className="floating-chat" type="button" aria-label="Open support chat">
      <MessageIcon />
      <span>1</span>
    </button>
  )
}

export default FloatingChatButton
