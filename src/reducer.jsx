let reducer = (state, action)=>{
        switch(action.type){
            case 'Loader':
                return{
                    ...state,
                    isLoading: true
                }
            case 'showerror':
                return{
                    ...state
                }
            case 'Get_stories':
               return {
                    ...state,
                    isLoading: false,
                    hits : action.payload.hits,
                    nbPages: action.payload.nbPages

                }
            case 'getsearch':
                return {
                    ...state,
                    query: action.search
                }
                case 'increment':
                    let pagenum= state.page+1
                    if(pagenum>=state.nbPages){
                        pagenum = 0
                    }
                        return{
                            ...state,
                            page: pagenum                        
                        }
                    
                    
                case 'decrement':
                    let pageNum = state.page;
                    if(pageNum<=0){
                        pageNum = 1;
                    }else{
                        return{
                            
                            ...state,
                            page: pageNum-1                
                        }
                    }
                        
                case 'removepost':
                    return{
                        ...state,
                        hits: state.hits.filter((elem,index)=>{
                            return elem.objectID !== action.payload;
                        })
                    }

                default:
                    return null;
        }
}

export {reducer}