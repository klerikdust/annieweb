import React from 'react'
import Slide from "@material-ui/core/Slide";
import NavBar from '../components/NavBar';
import ContentBox from '../components/ContentBox';

class Team extends React.Component {

  render() {

    document.title = "About | Annie"

    return (
        <div className="About">
            <NavBar view="About"/>
            <Slide
            in={true}
            timeout={1000}
            direction="right">
            {ContentBox({
              align: `center`,
              id: `about-header`,
              header: <div>Why artists should choose <span style={{fontWeight: `bold`}}>Annie?</span></div>
            })}
            </Slide>
            {ContentBox({
              id: `about-2`,
              align: `right`,
              header: `The Most Dedicated Bot for Artists.`,
              desc: <div> Refined beautiful UI and UX made by professional designer<br />
              You won't see something like this anywhere around discord.</div>
            })}
            {ContentBox({
              id: `about-3`,
              align: `left`,
              header: `Always up to date.`,
              desc: <div> Our development team constantly improving the app. <br />
              So expects refreshed content every month.</div>
            })}
              {ContentBox({
              isFooter: true,
              id: `about-2`,
              align: `right`,
              header: `Create more.`,
              desc: <div> Annie is built purposely to help artist to create more creative pieces<br />
                 and get more connected with other creative-like minds.</div>
            })}
        </div>
    )
  }
}
export default Team