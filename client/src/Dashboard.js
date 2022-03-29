import React from 'react'
import Header from './Header.js';
import StatContainer from './StatContainer.js';
// import BoxContainer from './BoxContainer.js';
import SetList from './features/SetList.jsx'


function Dashboard({ sets }) {
  return (
    <>
      <Header />
      <StatContainer />
      <SetList sets={sets} />
    </>
  )
}

export default Dashboard