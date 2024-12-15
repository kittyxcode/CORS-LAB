//prueba

function App(){
  return(
    <div>
      <h1>Click para enviar peticion</h1>
      <button onClick={
        async()=>{ 
          const res = await fetch('http://localhost:3000/ping')}
          }>Fetch</button>
          
    </div>
  )
}

export default App
