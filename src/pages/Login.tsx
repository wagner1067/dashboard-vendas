import { BannerImage } from "@/components";

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'


function Login() {

    return (
        <>
            <Box>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
                    >
                        <Container maxWidth='sm'>
                            <h1>LOGIN</h1>
                        </Container>
                    </Grid>
                    <Grid
                        item
                        sm={6}
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <BannerImage />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login