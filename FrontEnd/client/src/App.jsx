function App(){
  return(
    <div>
      <h1>Click para enviar peticion</h1>
      <button onClick={async()=>{
        const res = await fetch('http://localhost:3000/ping')
        const data = await res.text();
        console.log(data)
      }}>Fecth</button>  
    </div>
  )
}

export default App
