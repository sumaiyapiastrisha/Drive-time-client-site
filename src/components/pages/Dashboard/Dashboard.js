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
import Pay from './Pay/Pay';
import './Dashboard.css'
import { typography } from '@mui/system';
import useFirebase from '../../../hooks/useFirebase';

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

        <div >
            <Toolbar className="bg-dark"

            />
            <Divider />
            <Link to='/home' className="links " ><h4 className="mt-5"> Home</h4></Link><br />
            {user?.email ?
                <Button onClick={logout} variant="white" className=" nav-item  border-0  "> <h4>LogOut</h4></Button>
                :
                <Link as={Link} to="/login" className=" nav-item "> <h4>Login</h4></Link>
            }

            {/* if not an admin  */}
            {!admin && <Box>
                <Link to={`${url}`} className="links "> <h4>Dashboard</h4></Link><br />
                <Link to={`${url}/myOrders`} class="links  " ><h4>MyOrders</h4> </Link><br />
                <Link to={`${url}/pay`} className="links"><h3>Pay</h3> </Link><br />

                <Link to={`${url}/review`} className="links">  <h4> Add Review</h4></Link><br />

            </Box>}

            {/* // if admin */}
            {admin && <Box>
                <Link to={`${url}`} className="links"><h4> Dashboard</h4></Link><br />
                <Link to={`${url}/addProduct`} className="links"><h4>Add Product</h4></Link><br />
                <Link to={`${url}/manageAllOrders`} className="links"><h4>Manage All Orders</h4></Link><br />
                <Link to={`${url}/manageAllProducts`} className="links"><h4>Manage All Products</h4></Link><br />
                <Link to={`${url}/makeAdmin`} className="links"><h4>Make Admin</h4></Link><br />
            </Box>}

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
                    <Route exact path={`${path}/pay`}>
                        <Pay></Pay>
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
