import React from 'react'
import s from './index.module.scss'
import ReactPaginate from 'react-paginate'

export default function Pagination({count, onChangePage, currentPage}) {
    
  return (
    <div className={s.root}>
      <ReactPaginate
     className={s.container}
         breakLabel='...'
         nextLabel='>'
         onPageChange={(event)=> onChangePage (event.selected+1)}
         pageRangeDisplayed={3}
         pageCount={Math.ceil(count/8)}
         forcePage ={currentPage-1}
         previousLabel='<'
         renderOnZeroPageCount={null}
         />
    </div>
  )
}
