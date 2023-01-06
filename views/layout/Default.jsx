const React = require("react")

class DefaultLayout extends React.Component {
  render() {
    const logBG = {
      backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ef/StarfieldSimulation004.gif')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      color: "white",
      paddingTop: "50px",
    }

    const myMain = {
      width: "85%",
      height:  "700px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "black",
      padding: "50px",
      border: "1px solid #800020",
      fontSize:"20px",
      overflow: "scroll",
      overflowY: "auto",
      overflowX: "auto",
      opacity: ".9"
    }

    return (
      <html>
        <head>
        <link rel="icon" href="%layout_URL%/favicon.ico" />
          <title>{this.props.title}</title>
        </head>
        <body style={logBG}>
          <main style={myMain}>
            <h1>{this.props.title}</h1>
            {this.props.children}
          </main>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout