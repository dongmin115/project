function Delete(props){
    const list =[];
    for(let i=0;i<props.writing.length;i++){
      let t = props.writing[i]
      list.push(<h4 className='boardTitle'><a href={'/board/'+t.title} onClick={event=>{
        event.preventDefault();
        alert('해당 글을 삭제합니다');
        props.writing.splice(i,1);
        props.onChangeBoard();
      }}>{t.title}</a>
      <span className='boardName'>작성자:{t.name}</span>
      </h4>)
    }
    list.reverse();
    return <ul className='List'>
      
      {list}
      
    </ul>
  };

  export default Delete;