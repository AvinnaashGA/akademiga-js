const ChatBox = ({ chat, subtitle }) => {
  // console.log(props)
  let name = 'Aiman'
  let ranNumber = Math.random()
  let constant = 5
  let array = [1, 123, 23, 4, 5, 6, 'checking strings', 'Aiman']

  return (
    <div>
      <p>Nice to Meet You {name}</p>
      <p>Random Number {ranNumber}</p>
      <div>{ranNumber * constant}</div>
      {/* <div> */}
      {true && (
        <div>
          <div>{chat}</div>
          <div>{subtitle}</div>
        </div>
      )}
      {/* </div> */}
    </div>
  )
}

export default ChatBox