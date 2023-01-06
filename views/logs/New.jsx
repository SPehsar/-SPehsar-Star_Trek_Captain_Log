const React = require("react")
const DefaultLayout = require("../layout/Default")

class New extends React.Component {
  render() {
    let myButton = { width: "15rem", height: "2rem" }
    let wrapper = {
      display: "flex",
      height: "800px",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }

    return (

      <center style={wrapper}><DefaultLayout title="New Log Page">
        <div >
          <div>
            <form action="/logs" method="POST">
              Log Title: <br /><input type="text" name="title" style={myButton} /><br /><br />
              Log Entry <br /><textarea name="entry" style={myButton} rows="7" maxlength="30000" ></textarea><br />
              Log Date and Time: <br /><input type="datetime-local" name="datetimelocal" step="1" ></input><br />

              Is Ship Broken: <input type="checkbox" name="shipIsBroken" /><br /><br /><br /><br /><br />
              <input type="submit" style={myButton} value="Create Log" />
              
            </form>
          </div>


          <br></br>
          <div>
            <a href={`/logs/DashBoard`}>
              <button style={myButton} >Cancel</button>
            </a>
          </div>
        </div>
      </DefaultLayout></center>
    )
  }
}

module.exports = New



