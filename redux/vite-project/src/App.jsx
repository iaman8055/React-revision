import "bootstrap/dist/css/bootstrap.min.css"
import Container from "./components/Container"
import Controls from "./components/Controls"
import DisplayCounter from "./components/DisplayCounter"
const App = () => {
  return (
    <>
    <div className="px-4 py-5 my-5 text-center" >
      <Container>
      <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
      <DisplayCounter/>
      <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Controls/>
      </div>
    </div>
      </Container>
 
  </div>
    </>
    
  )
}

export default App