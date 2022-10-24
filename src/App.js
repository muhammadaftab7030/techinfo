import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useGlobalContext } from "./context"
const App = () => {
  let {isLoading, isError} = useGlobalContext();
  return (
    <React.Fragment>
    <div className="container">
    <div className="col-10 col-md-5 col-lg-5 col-xl-5 mx-auto">
    <div className="row mt-4">
    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
    <h2 className='text-center'>Tech News on The Go</h2>
    <Search />
    <Pagination />
    <Stories/>
    </div>
    </div>
    </div>
    </div>
    
    </React.Fragment>
  )
}

export default App