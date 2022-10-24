import React from "react"
import { useGlobalContext } from "./context"

const Stories = () => {
let {hits, nbPages,isLoading, removePost } = useGlobalContext();

  if(isLoading){
    return(
      <div className="text-center mt-5">
      <div className="loader"></div>
      </div>
    )
  }else{
    return (
      <React.Fragment>
        {
          hits.map((elem, index)=>{
            let {objectID, title, author, url, num_comments}=elem
            return(
              <div className="row p-4 mb-4 bg-color" key={index}>
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
              <div className="row">
              <h4 className="gy-3"> {elem.title} </h4>
              </div>
              <div className="row">
              <h6 className="gy-3"> By {elem.author} | {elem.num_comments} comments </h6>
              </div>
              <div className="row mt-4">
              <div className="col-6 col-md-6 col-lg-6 col-xl-6">
              <span><a href={url} target='_blank'>Read More</a></span>
              </div>
              <div className="col-6 col-md-6 col-lg-6 col-xl-6">
              <span className="float-end"><a onClick= {()=>removePost(objectID)} className="remove-class">Remove</a></span>
              </div>
              </div>
              </div>
              </div>
              )
          })
        }
        
      </React.Fragment>
      )
    }


}

export default Stories