import React from 'react';
import { useGlobalContext } from "./context"


const Pagination = () => {
  let { nbPages, incre, page, decre } = useGlobalContext();
    

  return (
    <React.Fragment>
    <div className='row mb-4'>
    <div className='col-12 col-md-8 col-lg-8 col-xl-8 m-auto text-center'>
    <div className='row'>
    <div className='col-4 col-md-4 col-lg-4 col-xl-4'>
    <span className='px-3 py-2 btn-prev' onClick={decre} >Prev</span>
    </div>
    <div className='col-4 col-md-4 col-lg-4 col-xl-4'>
    <span className=' nbpages'><p className='d-inline'>{page +1} of {nbPages}</p></span>
    </div>
    <div className='col-4 col-md-4 col-lg-4 col-xl-4'>
    <span className='px-3 py-2 btn-prev' onClick={incre}>Next</span>
    </div>
    </div>
    
    
    </div>
    </div>
    
    </React.Fragment>
    
  )
}

export default Pagination