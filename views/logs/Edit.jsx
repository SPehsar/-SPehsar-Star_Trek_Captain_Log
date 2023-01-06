const React = require("react")
const DefaultLayout = require("../layout/Default")

class Edit extends React.Component {
  render() {
    let myButton = {width: "15rem", height: "2rem"}
    let wrapper = {
      display: "flex",
      height: "800px",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }

    return (
      
      <center style={wrapper}><DefaultLayout title="Edit Log Entry">
        <div>
        <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
          Log Title: <br /><input type="text" name="title" style={myButton} defaultValue={this.props.log.title} /><br /><br />
          Log Entry: <br /><textarea  name="entry" style={myButton} defaultValue={this.props.log.entry} rows="7" maxlength="30000" ></textarea><br />
          Log Date and Time: <br /><input type="datetime-local" name="datetimelocal" step="1" defaultValue={this.props.log.datetimelocal}></input><br />
          
          Ship is broken:
          { this.props.log.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> } <br /><br /> <br /><br /><br />
          <input type="submit" style={myButton} value={`Edit ${this.props.log.title}`} />

        </form> <br></br>
       <a href={`/logs/Index`}>
            <button style={myButton} >Cancel</button>
          </a>
          </div>
      </DefaultLayout></center>
    )
  }
}

module.exports = Edit