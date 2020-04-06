const fs=require('fs')
const chalk=require('chalk')
const getNotes=function(){
    return "notes... are"
}
const addNotes=function(title,body){
  const notes=loadnotes()
  const duplicatenotes=notes.filter(function(note){
      return note.title===title
  })
  if(duplicatenotes.length==0)
  {
    notes.push({
        title:title,
        body:body
    })
    savenotes(notes)
    console.log(chalk.green.inverse('new note added!'))
  }
  else
  {
      console.log(chalk.red.inverse('NOte title is same'))
  }
}
const savenotes=function(notes)
{
    const datajson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}
const loadnotes=function()
{
    try
    {
        const databuffer=fs.readFileSync('notes.json')
        const datajson=databuffer.toString()
        return JSON.parse(datajson)
    }catch(e)
    {
        return []
    }
}
const removeNotes=function(title)
{
    const notes=loadnotes()
    const noteskeep=notes.filter(function(note){
        return note.title!==title
    })
    savenotes(noteskeep)
    if(notes.length>noteskeep.length)
    {
        console.log(chalk.green.inverse('note is removed'))
    }
    else{
        console.log(chalk.red.inverse('no note found'))
    }

}




module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
}
