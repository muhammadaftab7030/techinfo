import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  let {query, InputSearchHandler}= useGlobalContext();
  return (
    <React.Fragment>
    <div className='row my-4'>
    <div className='col-12 col-md-10 col-lg-10 col-xl-10 m-auto'>
    <input type="text" className='w-100 search' value={query} onChange={(e)=>InputSearchHandler(e.target.value)} placeholder='Search here...'/>
    </div>
    </div>
    
    </React.Fragment>
  )
}

export default Search