import Header from './components/Header/Header'
import ItemSection from './components/ItemSection.jsx'
import DifferencesSection from './components/DifferencesSection'
// import { Fragment } from 'react'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'
import EffectSection from './components/EffectSection'


function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('effect')

  return (
    <>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
          <>
            <ItemSection />
            <DifferencesSection />
          </>
        )}
        {tab === 'feedback' && <FeedbackSection />}
        
        {tab === 'effect' && <EffectSection />}
      </main>
    </>
  )
}

export default App

{
  /* <Fragment></Fragment>  =  <> </>  */
}
