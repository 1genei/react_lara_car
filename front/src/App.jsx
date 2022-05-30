import Nav from './pages/layouts/nav'


function App() {
  return (
    <div className="container" >
      
      <div className="row" > 
        <div className="col-12" style={{border:'2px solid grey'}}>
        
        <Nav/>
        
        </div>
        
        <div className="col-2" style={{border:'2px solid grey'}}>
          2 of 2
        </div>
        <div className="col-4" style={{border:'2px solid grey'}}>
          2 of 2
        </div>
      </div>
      
      
      <div className="row" style={{border:'5px solid yellow'}}>
        <div className="col">
          1 of 3
        </div>
        <div className="col">
          2 of 3
        </div>
        <div className="col">
          3 of 3
        </div>
      </div>
      
      
  </div>
  );
}

export default App;
