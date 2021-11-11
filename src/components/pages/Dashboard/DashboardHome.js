import { red } from '@mui/material/colors';
import { color } from '@mui/system';
import React from 'react';
import './Dashboard.css'
const DashboardHome = () => {


    // const style ={
    //     background-color:200: '#ef9a9a';
    // }
    return (
        <div class="container">

            <div class="row mt-4  g-2">
                <div class="col-sm-6  ">
                    <div class="card  totalsell">
                        <div class="card-body  ">
                            <h5 class="card-title" className="py-3 ">Total Sale : 850+</h5>


                        </div>
                    </div>
                </div>
                <div class="col-sm-6 ">
                    <div class="card pending" >
                        <div class="card-body ">
                            <h5 class="card-title py-3">Pending :1000+  </h5>


                        </div>
                    </div>
                </div>
            </div>

            <div class="row  my-5">
                <div class="col-sm-12 my-4 ">
                    <div class="  upcoming">
                        <div class="">
                            <h2 class="card-title  text-start py-3">Upcoming bikes....</h2>
                            <img src="https://cdn.luxe.digital/media/2020/12/21114949/best-electric-motorcycles-2021-luxury-luxe-digital%402x-2048x1024.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;