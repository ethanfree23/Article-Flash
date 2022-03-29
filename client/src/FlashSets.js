import React from 'react'
import Header from './Header.js';
import SetList from './features/SetList.jsx';

import { Link } from 'react-router-dom'

function FlashSets() {
  return (
    <>
    <Header />
    <SetList />
    </>
  )
}

export default FlashSets