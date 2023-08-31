import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Board from './components/Board';
import Write from './components/Write'
import Delete from './components/Delete';
import Posting from './components/Posting';
import Login from './components/Login';

function App() {
  const [mode,setMode] = useState('HOME');
  const [writing,setWriting] = useState([{name:'dongmin', title:'첫 글', content:'내용' }]);
  const [content,setContent] = useState(null);
  const [title,setTitle] = useState(null);
  const [name,setName] = useState(null);
  let context = null;
  if(mode === 'HOME'){
    context = <Home></Home>
  }
  else if(mode === 'BOARD'){
    context = <Board writing={writing} onPosting={(title,content,name)=>{
      setContent(content);
      setTitle(title);
      setName(name);
      setMode('CONTENT');
    }}></Board>
  }
  else if(mode === 'WRITE'){
    context = <Write onWrite={(name,title,body)=>{
      const addWriting = {name:name, title:title, content:body};
      const newWriting = [...writing];
      newWriting.push(addWriting);
      setWriting(newWriting);
      setMode('BOARD');
    }}></Write>
  }
  else if(mode === 'CONTENT'){
    context = <Posting content={content} title={title} name={name}></Posting>
  }
  else if(mode === 'DELETE'){
    context = <Delete writing={writing} onChangeBoard={()=>{setMode('BOARD');}}></Delete>
  }
  return (
    <div className='parentdiv'>
    {/* <Login></Login> */}
    <Header onChangeMode={(mode)=>{
      setMode(mode);
    }}></Header>
    <div className='secondDiv'>
      {context}
    </div>
    </div>

  );
}

export default App;
