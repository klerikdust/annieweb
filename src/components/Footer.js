import React from "react"
import Typography from "@material-ui/core/Typography"

class Footer extends React.Component {
    render() {
        return (
            <div>
                {/**  Footer end */}
                <Typography style={{
                    textAlign: "center",
                    fontSize: 13, 
                    fontWeight: "medium",
                    marginBottom: 100}}>
                    Beta V1 - Created by <span style={{fontWeight: "bold", color: "rgba(230, 80, 102, 1)"}}>Naph</span>
                </Typography>
            </div>
        )
    }
}


export default Footer