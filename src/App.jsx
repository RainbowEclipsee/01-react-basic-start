import Header from './components/Header/Header'
import ItemSection from './components/ItemSection.jsx'
import DifferencesSection from './components/DifferencesSection'
// import { Fragment } from 'react'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'

function App() {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
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
        
      </main>
    </>
  )
}

export default App

{
  /* <Fragment></Fragment>  =  <> </>  */
}
