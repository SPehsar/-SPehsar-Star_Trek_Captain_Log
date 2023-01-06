
const React = require("react")
const DefaultLayout = require("../layout/Default")

class Index extends React.Component {
  render() {
    const  { logs } = this.props
    let myButton = {width: "15rem", height: "2rem"}
    let myButton3 = {width: "45rem", height: "2rem"}
    let wrapper = {
      display: "flex",
      height: "800px",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }

    const liMargin ={
      margin: "50px 0"
    }
        

    return (
      <center style={wrapper}><DefaultLayout title="Logs Index Page">
       <div>
        <ul>
          {
            logs.map((log, i) => {
              return (
                <li style={liMargin}> 
                  "{log.title}"
                  {""}
                  : {log.entry} <br />
                  {
                    log.shipIsBroken 
                    ? "Ship is broken." 
                    : "Ship is not broken."
                  }
                  <br />
                  <a style={{}} href={`/logs/${log._id}`}><button style={myButton}>Read {log.title}</button></a>
                  <a href={`/logs/${log._id}/edit`}><button style={myButton}>Edit This Log</button></a>
                  <a href="/logs/new"><button style={myButton}>Create Log</button></a>
                  <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" style={myButton3} value="DELETE" />
                  </form>
                </li>
              )
            })
          }
        </ul>
        </div>
      </DefaultLayout></center>
    )
  } 
}

module.exports = Index
























// <!DOCTYPE html>
// <html>

// <head>
//   <meta charset="utf-8" />
//   <title></title>
// </head>

// <body>
//   <nav>
//     <a href="/logs/new">Add a New Log</a>
//   </nav>
//   <h1>Logs Index Page</h1>
//   <ul>
//     <% logs.forEach(log=> { %>
//       <li>
//         <a href="/logs/<%=log._id %>">
//           <%=log.title %>
//         </a>
//       </li>
//       <% }) %>
//   </ul>
// </body>

// </html>