import './App.css'
import Footer from './Footer'
import ChatBox from './ChatBox'
// import SideBar from './SideBar'
// import Header from './Header'
// import Hello from './Hello'
// import Counter from './Counter'
// import Slider from './Slider'
import MovieSearch from './MovieSearch'

const App = () => {
  // let chatText = 'Hello welcome to my Twitter'
  // let subTitle = 'Come to my blog'
  return (
    <div className='App' style={{ backgroundColor: 'mistyrose' }}>
      {/* <Header /> */}
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* <Slider/> */}
      {/* <SideBar /> */}
      {/* <ChatBox chat={chatText} subtitle={subTitle} /> */}
      {/* <Footer /> */}
      <MovieSearch/>
    </div>
  )
}

export default App
