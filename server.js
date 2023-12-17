import express from 'express'
const app = express()
import * as database from './database.js'
app.set("view engine", "ejs")
app.use(express.urlencoded({extend:true}))



app.get('/',(req,res)=>{
    res.render("index.ejs")
})


app.get('/notes',async (req,res)=>{
  const notes=await database.getNotes();
  res.render("notes.ejs",{
    notes,
  });
})

app.get('/notes/:id',async (req,res)=>{
  const id = +req.params.id
  const note2= await database.getNote(id)
  const note = note2[0]

  if(!note){
    res.status(404).render("note404.ejs")
    return
  }
  res.render("singleNote.ejs",{
    note,
  });
})

app.get('/createNote', (req,res)=>{
  res.render('createNote.ejs')
})

app.post('/notes2',async (req,res)=>{
  const data = req.body
  console.log(data)
  await database.addNote(data.title,data.contents)


  res.redirect("/notes")

})

app.post("/notes/:id/delete",async (req,res)=>{
  const id = +req.params.id
  await database.deleteNote(id)
  res.redirect("/notes")

})

app.use(express.static("public"))


const port = 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 


// test