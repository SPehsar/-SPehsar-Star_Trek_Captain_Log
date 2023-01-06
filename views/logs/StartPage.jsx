
const React = require("react")
const DefaultLayout = require("../layout/Default")

class StartPage extends React.Component {
    render() {
        let myButton = { width: "15rem", height: "2rem" , backgroundColor: "#1F51FF"}
        let wrapper = {
            display: "flex",
            height: "800px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }

        return (
            <center style={wrapper}><DefaultLayout title="Starfleet Command Log System">
                <div>

                    <br /><a href={`/logs/Index`}>
                        <center><img src='https://media.tenor.com/SjyL1AEZge8AAAAd/star-trek-enterprise.gif' width='1000' height='500'></img></center>
                        <button style={myButton}>Go to the Logs</button>
                    </a>

                </div>
            </DefaultLayout></center>
        )
    }
}

module.exports = StartPage