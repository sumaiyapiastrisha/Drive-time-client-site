import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../hooks/useAuth';
import MyOrders from './MyOrders/MyOrders';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import DashboardHome from './DashboardHome';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './ManageAllProducts/ManageAllProducts';
import Review from './Review/Review';
import Feedback from './Feedback/Feedback';
import Pay from './Pay/Pay';
import './Dashboard.css'
import { typography } from '@mui/system';
import useFirebase from '../../../hooks/useFirebase';
import AddBlog from './AddBlog/AddBlog';
import SellerForm from './SellerForm/SellerForm';


const drawerWidth = 200;

function Dashboard(props) {
    const { user, logout } = useFirebase();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div className='text-start   '>
            <Toolbar className="bg-dark">
                <h4 className='text-danger ps-0 '>Drive Time</h4>
            </Toolbar>

            <div className='ps-5'>
                {/* <Divider /> */}
                <Link to='/home' className="links " ><p className="mt-5 "> Home</p></Link><br />
                {/* {user?.email ?
                <Button onClick={logout} variant="white" className=" nav-item  border-0  "> <p>LogOut</p></Button>
                :
                <Link as={Link} to="/login" className=" nav-item "> <p>Login</p></Link>
            } */}

                {/* if not an admin  */}
                {!admin && <Box className='ps-5'>
                    <Link to={`${url}`} className="links  ps-3"> <p className="ps-5">Dashboard</p></Link><br />
                    <Link to={`${url}/myOrders`} class="links  " ><p className="ps-5">MyOrders</p> </Link><br />
                    {/* <Link to={`${url}/pay`} className="links"><h3>Pay</h3> </Link><br /> */}

                    <Link to={`${url}/review`} className="links">  <p className="ps-5"> Add Review</p></Link><br />
                    <Link to={`${url}/feedback`} className="links">  <p className="ps-5"> Add Complain</p></Link><br />
                    <Link to={`${url}/blogs`} className="links">  <p> Add Blog</p></Link><br />
                    <Link to={`${url}/sellerform`} className="links">  <p> Post  add</p></Link><br />


                </Box>}

                {/* // if admin */}
                {admin && <Box>
                    <Link to={`${url}`} className="links"><p> Dashboard</p></Link><br />
                    <Link to={`${url}/addProduct`} className="links"><p>Add Product</p></Link><br />
                    <Link to={`${url}/manageAllOrders`} className="links"><p>Manage Orders</p></Link><br />
                    <Link to={`${url}/manageAllProducts`} className="links"><p>Manage Products</p></Link><br />
                    <Link to={`${url}/makeAdmin`} className="links"><p>Make Admin</p></Link><br />
                </Box>}

            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="bg-dark">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* routes */}
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route exact path={`${path}/feedback`}>
                        <Feedback></Feedback>
                    </Route>
                    <Route exact path={`${path}/blogs`}>
                        <AddBlog></AddBlog>
                    </Route>

                    <Route exact path={`${path}/sellerform`}>
                        <SellerForm></SellerForm>
                    </Route>



                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
