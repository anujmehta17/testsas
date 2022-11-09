// import {SET_MODAL,changeStateSubmenu} from '../Store/NavigationAction';
const initialState={
    modal:false,
   linkclicked:false,
   url:""
}
console.log("inside reducer")
const Reducer = (state=initialState,action) => {
    switch(action.type)
    {

       case "linkclick":
      console.log("linkclick state")
       
     state={
        ...state,
        linkclicked:true,
        url:action.payload.url
     }
          
     
    console.log("new state", state)
   
}
return state;
}

export default Reducer;