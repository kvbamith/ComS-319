class App extends React.Component{
    render(){
        return(
            <div>
                <h3>Student name:</h3>
                <h3>Student class: </h3>
                <p>Student year:</p>
            </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById("app"));