import React from 'react'
import { Helmet } from 'react-helmet'
import NavBar from '../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Title from '../components/Title';
import AddList from '../components/List';
import { mobile } from '../config/Layout';
import CommandsList from '../locale/Commands';

class Commands extends React.Component {

  constructor(props) {
      super(props)
      this.state = {mobileLayout:false, visible:true};
      this.minifiedWidth = mobile.maxWidth
  }


  componentDidMount(){
      if(window.innerWidth <= this.minifiedWidth){
        this.setState({mobileLayout:true});
      }

      window.addEventListener('resize',()=>{
        if(window.innerWidth <= this.minifiedWidth){
          this.setState({mobileLayout:true});
        }
        else{
          this.setState({mobileLayout:false})
        }
      });
    }


  _legendaryInfo() {
    return (
      <div style={{
        marginTop: 20, 
        textAlign: this.state.mobileLayout ? `center` : `left`}}>
        <Typography>
          <span style={{
            fontSize: `20pt`,
            fontWeight: `bold`,
            color: "rgba(230, 80, 102, 1)"}}> 
            {CommandsList[`EN`].length} </span>  commands are available to use.
        </Typography>
      </div>
    )
  }


  /**
   *  Formatting content for nested list.
   *  @param {String} content 
   */
  _usagesTemplate(content = ``) {
    return (
      <div>
        <span style={{fontWeight: "bold", fontSize: `15pt`}}>Usages</span>
        <br/>
        {content}
      </div>
    )
  }


  /**
   *  Fetching available commands from locale.
   *  @private
   */
  _commandsList() {
    return CommandsList[`EN`].map(val => {
          return <AddList 
            label={`>` + val.name} 
            content={this._usagesTemplate(val.usage)} 
            desc={this.state.mobileLayout ? null : val.description}
            secondary={this.state.mobileLayout ? val.description : null}
          />
      })
  }


  render() {
    return (
      <div className="Commands">
        <Helmet>
          <title>Commands | Annie</title>
        </Helmet>       
        <NavBar view="Commands" />

        <Grid container spacing={2} style={{
          padding: this.state.mobileLayout ? 20 : 100,
          textAlign: this.state.mobileLayout ? "center" : "left"
          }}>

          {/**  Header  */}
          <Grid item xs={12} style={{marginLeft: this.state.mobileLayout ? 0 : 80}}>
            <Title title="Commands" caption="Browse an extensive collection of Annie's Commands!"/>
          </Grid>

          {/**  Sub header  */}
          <Grid item xs={12} style={{marginLeft: this.state.mobileLayout ? 0 : 80}}>
            {this._legendaryInfo()}
          </Grid>

          {/**  List of commands fetched from locale  */}
          <Grid item xs={12} style={{padding: this.state.mobileLayout ? 25 : 80}}>
            {this._commandsList()}
          </Grid>

        </Grid>
      </div>
    )
  }
}

export default Commands