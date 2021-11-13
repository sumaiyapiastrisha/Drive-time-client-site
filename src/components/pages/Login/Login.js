import React, { useState } from 'react';
import { Container, Typography, TextField, CircularProgress, Alert, Grid } from '@mui/material';
import { Button, } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>

            <div>
                <Header></Header>
            </div>
            <Grid className="login" spacing={2}>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }}
                        src="https://t4.ftcdn.net/jpg/03/67/23/65240_F_367236511_Pss9edEHDb7dLAvBq3hPnppIK6zBqR65.jpg" alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            placeholder="Email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleOnChange}
                            variant="standard" /><br />

                        <Button className="btn btn-warning  w-75 mt-4" type="submit" variant="">Login</Button><br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <h5 className="  mt-4">New User? Please Register</h5>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>------------------------</p>
                    <Button onClick={handleGoogleSignIn} className="btn btn-danger  mb-5">Google Sign In</Button>
                </Grid>
                <div>
                    <Footer></Footer>
                </div>
            </Grid>
        </>
    );
};

export default Login;