import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

const MyPageContainer = () => {

    const { user } = useSelector(
        ( {user} ) => ({
          user: user.user
        })
    );

        return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <Typography component="h1" variant="h5">
            <p>{user.username}</p>님 환영합니다.
        </Typography>
        </Box>
        </Container>
        )
    }

export default MyPageContainer
