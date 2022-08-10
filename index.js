
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())


app.get('/characters',async(req,res) =>{
    
    try {
        
        const request = await axios.get('https://rickandmortyapi.com/api/character')
        
        
        
        const DBFILTERED = request.data.results.map((char) =>   char.name  );
          let count = 0
        //console.log(DBFILTERED, "llego esto")
        let palabrasConC = DBFILTERED.toString().toLowerCase()
        let valores = function(){
            for (let i = 0; i < palabrasConC.length; i++) {
                if(palabrasConC[i] === 'c'){
                    count ++
                }
                
                
            }
            return count
        }
        console.log(valores(),'llego esto con C') 
        //console.log(DBFILTERED,'llego esto en los characters con C')
    return res.send(DBFILTERED)
    
    
} catch (error) {
    console.log("ERROR EN EL GET", error)
}

})





const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`${PORT} funcionando correctamente`)
})

