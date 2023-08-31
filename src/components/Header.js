import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, lightGreen, yellow } from '@mui/material/colors';
const theme = createTheme({
    palette: {
      primary: {main: lime[500]},
      secondary: {main: lightGreen[400]},
      success: {main: yellow[500]}
    },
  });

export default function Header(props){
    return <div className='Header'>
      <h1>Title</h1>
      <p>
      <ThemeProvider theme={theme}>
      <ButtonGroup variant='contained' aria-aria-label='contained button group'>
      <Button   href='/' onClick={(event)=>{
          event.preventDefault()
          props.onChangeMode('HOME');
        }}>홈</Button>
        <Button href='/board' onClick={(event)=>{
          event.preventDefault()
          props.onChangeMode('BOARD');
        }}>게시판</Button>
        <Button href='/write' onClick={(event)=>{
          event.preventDefault()
          props.onChangeMode('WRITE');
        }}>글쓰기</Button>
        <Button href='/delete' onClick={(event)=>{
          event.preventDefault()
          props.onChangeMode('DELETE');
          alert('삭제하고 싶은 글을 클릭하세요.');
        }}>글삭제</Button>
        </ButtonGroup>
        </ThemeProvider>
      </p>
    </div>
  };