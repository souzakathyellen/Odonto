  import express from "express";
  import connectDataBase from "./config/dbConnect.js";
  import odonto from "./models/odonto.js";

  const conexao = await connectDataBase();

  conexao.on("error", (erro)=>{
    console.log("Erro de conexão: ", erro);
  });

  conexao.once("open", ()=>{
    console.log("Conexão com o banco realizada devidamente!")
  });

  const app = express();
  app.use(express.json())
  /*const odonto = [
      {id: 1, "titulo": "Aparelho Dental"},
      {id: 2, "titulo": "Clareamento Dentário "},
      {id: 3, "titulo": "Limpeza Dental"}
    ]
    */
    app.get('/', (req, res) => {
      res.status(200).send('Inicio FourOdonto');
    }) 
    
    app.get('/odonto', async(req, res)=> {
      const listaOdonto = await odonto.find({});
        res.status(200).json(listaOdonto);
    })

    /*app.post('/odonto', (req, res) =>{odonto.push(req.body)
      res.status(201).send('Vaga cadastrada com Sucesso!')
    })

    app.put('/odonto/:id', (req, res) => {
      let index =buscaOdonto(req.params.id);odonto [index].titulo = req.body.titulo;
      res.json(odonto);
    })
    
    app.get('/odonto/:id', (req, res)=>{
      const index =buscaOdonto(req.params.id);
      res.status(201).json(odonto[index]);

    })

    app.delete('/odonto/:id',(req, res)=>{
      const index =buscaOdonto(req.params.id);
      if (index !== -1) {odonto.splice(index, 1);  
        res.status(204).send(); 
      } else {
        res.status(404).send('Vaga não encontrada'); 
      }
    })
    

    function buscaOdonto(id) {
      rodonto.findIndex(odonto => odonto.id == id)
    }*/
    export default app 

        

