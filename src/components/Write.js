import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, lightGreen, yellow } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const theme = createTheme({
    palette: {
      primary: {main: lime[500]},
      secondary: {main: lightGreen[400]},
      success: {main: yellow[500]}
    },
  });
function Write(props){
    return <article>
      <ThemeProvider theme={theme}>
      <form onSubmit={(event)=>{
        const title = event.target.title.value;
        const body = event.target.body.value;
        const name = event.target.name.value;
        props.onWrite(name,title,body);
        event.preventDefault();
      }}>
      <TextField className='wrtieTitle' name="title" label="제목" variant="standard" />
      <span><TextField className='writeName' name="name" label="작성자" variant="standard" /></span>
      <TextField name="body" label="글을 작성하세요" variant="outlined" multiline rows={15} fullWidth margin='dense'/>
      <p><Button variant="contained" type='submit'>게시</Button></p>
    </form>
    </ThemeProvider>
    </article>
  }
  export default Write;