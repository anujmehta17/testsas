import * as React from 'react';
import styles from './SiteNavigationWebpart.module.scss';
import { ISiteNavigationWebpartProps } from './ISiteNavigationWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ISiteNavigationWebPartState } from './ISiteNavigationWebPartState';
// import SitesDisplay from './SitesDisplay';
import { spfi, SPFx} from '@pnp/sp/presets/all';
// import {sp} from '@pnp/sp/presets/all';
import {Web} from '@pnp/sp/webs';
import classes from './SiteNavigation.module.scss';
// import FetchcolumnInternalName from '../services/FetchcolumnInternalName';
// import FetchPropertyOfAllSitePages from '../services/fetchArea';
// import FetchPropertyOfCurrentPage from '../services/FetchPropertyOfCurrentPage';
import { useSelector } from 'react-redux';
import { AudienceTarget } from '../services/AudienceTarget';
import SitesDisplay from './SitesDisplay';
// const [audiencelist,setaudiencelist]=React.useState(null)
export default class SiteNavigationWebpart extends React.Component<ISiteNavigationWebpartProps, ISiteNavigationWebPartState> {

  constructor(props: ISiteNavigationWebpartProps)
  {
    super(props),
    this.state={
      pagesproperty:[],
      pageproperty:{
        Title:"",
        Url:""
      },
     
      url:"https://170198.sharepoint.com/sites/EMANSITE"
    }
     

  }
  
  async componentDidMount()
  {
    const sp=spfi(this.state.url).using(SPFx(this.props.ctx))

         const audienceList= await AudienceTarget(this.state.url,"DocumentLibraryList",this.props.ctx)
        this.setState({pagesproperty:audienceList})
   console.log("audience",this.state.pagesproperty)
 }
  
  render() {
   
    //  console.log(this.state.pagesproperty)
    //  console.log(this.state.CurrentPagePropertyValue)
    // //  console.log(this.props.ColumnName)
    //  console.log(this.props.textcolor)
    //  console.log(this.props.choice)
    //  console.log(this.props.ColumnTitle)
    return (
    <div>
      <SitesDisplay list={this.state.pagesproperty} ctx={this.props.ctx}/>
    </div>
         
    );
  }
}
