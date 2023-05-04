import Router from 'express';

import {Todo} from '../module/todos'
const router=Router();
let todos: Todo[]=[];

router.get('/',(req,res,next)=>{
res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
const newTodo:Todo={
id:new Date().toISOString(),
text:req.body.text
}

todos.push(newTodo);
res.status(200).json({todos:newTodo})
})


router.put('/todo/:todoid',(req,res,next)=>{
    const tid=req.params.todoid;
    const todoindex=todos.findIndex((todoItem)=>todoItem.id);
    if(todoindex>=0){
         todos[todoindex]={id:todos[todoindex].id,text:req.body.text}
        return  res.status(200).json({message:'updated todos'})
    }
    res.status(400).json({message:'could not find id'})
})


router.delete('/todo/:todoId',(req,res,next)=>{
todos=todos.filter(todoItem=>todoItem.id!==req.params.todoId)
res.status(200).json({message:'successfully deleted'})
})
export default router;