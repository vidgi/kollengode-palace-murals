import './App.css'

import { StickyLinkData } from './sticky-data'
import { StickyNote } from './sticky-components'
import { RulerLine } from './RulerLine'

function App() {
  return (
    <>
      <h1 className="site-title">Kollengode Palace Murals</h1>
      <div className="App">
        <RulerLine />
        {StickyLinkData.map((item, index) => (
          <StickyNote
            key={item.id}
            id={item.id}
            color={item.color}
            text={item.text}
            image={item.image}
            yOffset={item.yOffset}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default App
