import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Shared/Footer';
import Header from '../../../Shared/Header';
import Login from '../Login';
import './Register.css'




//register page
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (

        <>
            <div>

                <Header></Header>

            </div>


            <div className="container ">

                <div className="card r-card">
                    <div className="card-image">
                        <h2 className="card-heading">
                            Get started
                            <small>Let us create your account</small>
                        </h2>
                    </div>
                    <form onSubmit={handleLoginSubmit} className="card-form">
                        <div className="input">
                            <input type="text" className="input-field" name="name"
                                onBlur={handleOnBlur} required />
                            <label className="input-label">Full name</label>
                        </div>
                        <div className="input">
                            <input type="email" name="email"

                                onBlur={handleOnBlur} className="input-field" required />
                            <label className="input-label">Email</label>
                        </div>
                        <div className="input">
                            <input type="password"
                                name="password"
                                onBlur={handleOnBlur} className="input-field" required />
                            <label className="input-label">Password</label>
                        </div>
                        <div className="input">
                            <input type="password"
                                name="password2"
                                onBlur={handleOnBlur} className="input-field" required />
                            <label className="input-label">Password</label>
                        </div>
                        <div className="action">
                            <button type='submit' className="action-button">Get started</button>
                        </div>
                    </form>
                    {/* <div className="card-info">
                        <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
                    </div> */}
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
                </div>
            </div>




            {/* <Container>


                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                        <Typography variant="body1" gutterBottom>Register</Typography>
                        {!isLoading &&




                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Name"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="ReType Your Password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard" />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </form>}



                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>

                </Grid>

            </Container> */}
            <div>
                <Footer></Footer>
            </div>

        </>
    );
};

export default Register;
