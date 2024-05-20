import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.scss'
export default function NotFoundBlock() {
  return (
    <div className={s.root}>
      <h1>Not Found</h1>
      <img src='/img/pngSkull.png'></img>
      <p className={s.direction}>There is no such page in our store yet.</p>
    </div>
  )
}
