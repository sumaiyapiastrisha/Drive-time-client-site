import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
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

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            <Link to='/home' className="link  py-3"> Home</Link><br />
            {!admin && <Box>
                <Link to={`${url}`} className="link "> Dashboard</Link><br />
                <Link to={`${url}/myOrders`} className="link"> MyOrders</Link><br />
                <Link to={`${url}/pay`} className="link"> Pay</Link><br />

                <Link to={`${url}/review`} className="link">   Add Review</Link><br />

            </Box>}

            {admin && <Box>
                <Link to={`${url}`} className="link"> Dashboard</Link><br />
                <Link to={`${url}/addProduct`} className="link">Add Product</Link><br />
                <Link to={`${url}/manageAllOrders`} className="link">Manage All Orders</Link><br />
                <Link to={`${url}/manageAllProducts`} className="link">Manage All Products</Link><br />
                <Link to={`${url}/makeAdmin`} className="link">Make Admin</Link><br />
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
