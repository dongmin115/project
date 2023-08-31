function Posting(props){
    return <div className='Posting'>
      <h4 className='postTitle'>{props.title}
      <p className='postContent'>
      {props.content}
      <span>작성자:{props.name}</span>
      </p>
    </h4>
  </div>
  
  }

export default Posting;