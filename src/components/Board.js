function Board(props){
    const list =[];
    for(let i=0;i<props.writing.length;i++){
      let t = props.writing[i]
      list.push(<h4 className='boardTitle'><a href={'/board/'+t.title} onClick={event=>{
        event.preventDefault();
        props.onPosting(t.title,t.content,t.name);
      }}>{t.title}</a>
      <span className='boardName'>작성자:{t.name}</span>
      </h4>)
    }
    list.reverse();
    return <ul className='List'>
      
      {list}
      
    </ul>
  };

  export default Board;