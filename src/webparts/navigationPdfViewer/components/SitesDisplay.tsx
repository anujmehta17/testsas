import * as React from "react"
import styles from "./SiteNavigationWebpart.module.scss";
import classes from './SitesDisplay.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from "@material-ui/core";
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/all";

import { useDispatch, useSelector } from "react-redux";
import { DocumentsAudienceTarget } from "../services/DocumentsAudienceTarget";
import { linkclicked } from "../Store/Actions";
import DocumentDisplay from "./DocumentsDisplay";

// const displaydocuments=(url)=>{
//     console.log("inside display documents")
//     console.log("url is",url)
//     document.getElementById("docLib").innerHTML='<iframe src="https://170198.sharepoint.com/sites/EMANSITE/SAS%20AirNavx%20All%20Fleet/Forms/AllItems.aspx" height="500" width="800" />'
// }

const EmanImage : any = require("../Store/EmanSASImage.png");
const SitesDisplay=(props:{list,ctx}):JSX.Element=>{
     const mystate=useSelector(state=>state["linkclicked"]);
     const urlState=useSelector(state=>state["url"])
   console.log(mystate,"mystate")
   console.log(urlState,"url")
   const dispatch= useDispatch();
    var elem,close;
   return(
   <div className={classes.showdocument}>
    <div className={classes.linksdiv}>
    {  
         props.list.map((i,index)=>{
        return <div className={classes.link} onClick={()=>dispatch(linkclicked(index,i.ListName))}>
            
              <a href="#docLib"> {i.Title}</a> 
        </div>
    })
    }
    </div>
   <div id="docLib" className={classes.showdiv}>
    {
        mystate?<DocumentDisplay ctx={props.ctx} url={urlState} />:<img  src={EmanImage}/>
    }
    </div>

   </div>
   )
}
export default SitesDisplay;