const React = require("react");
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
  render() {

    let myButton = { width: "15rem", height: "2rem" }
    let bgColor = {backgroundColor: "blue"}
    let wrapper = {
      display: "flex",
      height: "800px",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color:"white"
    }

    const centerFlexP1 = {
      display: "flex",
      fontWeight: "bold",
      alignItems: "left",
      height: "30px",
      paddingLeft: "10px",
      backgroundColor: "#800020"
    }
    
    const centerFlexP2 = {
      display: "flex",
      alignItems: "left", 
      paddingLeft: "10px"  
    }

    const { title, entry, datetimelocal, shipIsBroken } = this.props.log
    return (
      <center style={wrapper}><DefaultLayout title={`${title} Show Page`}>
        <div style={bgColor}>
          <div>
            <p style={centerFlexP1}>Subject: {title}</p>
            <p style={centerFlexP2}>{datetimelocal}</p>
            <p style={centerFlexP2}>{entry}</p>
            <p style={centerFlexP2}>{shipIsBroken ? "Ship is broken ... repairs are in progress." : "Ship is not broken!"}</p>
          </div>
          <div>

          <br /><p><br></br><a href={`/logs/Index`}>
              <button style={myButton}>Go to Logs</button>
            </a></p>
          </div>

        </div>

      </DefaultLayout></center>
    )
  }
}

module.exports = Show
