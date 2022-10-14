export default function Spinner(){
    return(
        <div className="App container-fluid border">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center "style={{height:"100vh"}}>
                    <div className="spinner-border text-dark" role="status">
                     </div>
                </div>
            </div>
        </div>
    )
}