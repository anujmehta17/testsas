import * as React from "react"
import styles from "./SiteNavigationWebpart.module.scss";

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from "@material-ui/core";
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/all";

import { useDispatch, useSelector } from "react-redux";
import { DocumentsAudienceTarget } from "../services/DocumentsAudienceTarget";
import { linkclicked } from "../Store/Actions";
import classes from './DocumentDisplay.module.scss'
import { FeedbackService } from "../services/UserInfoServiceToList";

const DocumentDisplay= (props:{ctx,url})=>{
    const [documents,setdocuments]=React.useState([]);
 React.useEffect(()=>{
    (
        async()=>{
            await DocumentsAudienceTarget("https://170198.sharepoint.com/sites/EMANSITE",props.url,props.ctx, res=>{
                console.log("response fetched",res)
                setdocuments(res)
            });
            
        }
    )()
 },[props.url])
console.log(documents,"documents fetched")
const handleclick=async (url,title)=>{
    console.log("clicked")
    await FeedbackService(props.ctx,title,"NavigationUserInfo")


    window.open(url);
   
}
   return(
    <div>
        <div style={{height:"150px",overflow:"scroll"}}>
            <table className={classes.table}>
                <tr>
                    <td className={classes.column}>Vendor </td>
                    <td className={classes.column}>Operator </td>
                    <td className={classes.column}>Description </td>
                    <td className={classes.columnRevNo}>Rev-No </td>
                     {/* <td className={classes.column}>Rev-Date </td> */}
                </tr>
                {
                    documents.map(i=>{
                        return(
                            <tr>
                                {console.log(i.Title)}
                               <a onClick={()=>handleclick(i.DocumentUrl, i.Title)} className={i.DocumentUrl?classes.haslink:null} >
                               <td className={classes.valuecolumn}> {i.Title}</td></a>
                                <td className={classes.valuecolumn}>{i.Operator}</td>
                                <td className={classes.valuecolumn}>{i.DocumentDescription}</td>
                                <td className={classes.valuecolumnRevNo}>{i.RevNo}</td>
                                {/* <td className={classes.valuecolumn}>{i.RevDate}</td> */}
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        {
            
        }
    </div>
   )
}
export default DocumentDisplay;