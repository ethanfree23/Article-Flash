import React from 'react'
import Header from './Header.js';
import BoxContainer from './BoxContainer.js'


function Articles({ articles }) {
  return (
    <>
      <Header />
      <BoxContainer articles={articles}Î/>
    </>
  )
}

export default Articles