const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
var todos=new Map();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist/todo-app')));

app.get('/currentTodo',(request , response)=>{
  response.sendFile('index.html')
});

app.get('/getData',(request , response)=>{
  let result = {};
  todos.forEach((value, key) => {
    result[key]=value;
  });
  response.json(result);
});

app.post('/postData', (request,response)=>{
  todos.set(request.body.data.title,request.body);
  console.log(todos.size);
  response.status(200).send({'Message' : 'data sent'});
})

app.post('/deleteTodo', (request, response)=>{
  //console.log(todos.size);
  todos.delete(request.body.title);
  //console.log(todos.size);
  response.status(200).send({'Message':'Todo deleted'});
})
app.listen(port,(request,response)=>{
  console.log('server listening at port:',port);
});
