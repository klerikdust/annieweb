import React from 'react'
import Typography from "@material-ui/core/Typography";

const ContentBox = ({id='', header=``, desc=``, align=`left`, isFooter=false}) => {

    return (
        <div className={id} align={align}>
            <Typography 
            variant="h2"
            style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: 50,
            marginLeft:  (align === `left`) ? 100 : 0,
            marginRight: (align === `right`) ? 100 : 0,
            marginTop: "50vh"
            }}>
            {header}
            </Typography>
            <Typography 
            variant="subtitle1"
            style={{
            color: "rgba(0, 0, 0, 0.6)",
            marginLeft: (align === `left`) ? 100 : 0,
            marginRight: (align === `right`) ? 100 : 0,
            marginTop: 15,
            marginBottom: isFooter ? `50vh` : 0
            }}>
            {desc}
            </Typography>
        </div>
    )
}

export default ContentBox