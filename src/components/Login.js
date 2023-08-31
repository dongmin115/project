import TextField from '@mui/material/TextField';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, lightGreen, yellow } from '@mui/material/colors';
import { PropaneSharp, SetMealOutlined } from '@mui/icons-material';
const theme = createTheme({
    palette: {
      primary: {main: lime[500]},
      secondary: {main: lightGreen[400]},
      success: {main: yellow[500]}
    },
  });

const Login = ((props)=>{
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return <div className='loginDiv'>
    <ThemeProvider theme={theme}>
    <p className='loginTitle'>블로그에 로그인 하세요!</p>
    <TextField margin='normal'fullWidth label="id" variant="outlined" />
    <TextField margin='normal'fullWidth label="password" variant="outlined" 
    type={showPassword ? 'text' : 'password'}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }/>
    <div className='loginButton'>
    <Stack spacing={15} direction="row">
    <Button variant='contained' onClick={(event)=>{
      event.preventDefault();
      props.onLogin('HOME');
    }}>로그인</Button>
    <Button variant='contained'>회원가입</Button>
    </Stack>
    </div>
    </ThemeProvider>
    </div>
})

export default Login;