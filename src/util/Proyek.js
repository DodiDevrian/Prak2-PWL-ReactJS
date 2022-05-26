import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
const styles = createUseStyles({
    content: {
        padding: 20,
        backgroundColor: '#d2d2db',
        paddingBottom: 60
    },
    isi: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: {
            left: 200,
            right: 200
        }
    },
    garis: {
        width: 900
    },
    title: {
        color: '#183153',
        textAlign: 'center',
        textDecoration: 'none',
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        margin: 10,
        maxWidth: 390,

        borderRadius: 4,
        "&:hover": {
            boxShadow: "6px 6px 1px #9E9E9E"
        },

    },
    thumbnail: {
        width: 300,
        height: 200,
        alignSelf: 'center',
    },
    teks: {
        textDecoration: 'none',
        color: 'black',
    }

});

const Proyek = () => {
    const style = styles();
    return (
        <div>
            <div className={style.content}>
                <h2 className={style.title}>Proyek</h2>
                <hr className={style.garis}></hr>
                <div className={style.isi}>


                    <div className={style.card}>
                        <center>
                            <img className={style.thumbnail} src="https://cdn.techinasia.com/wp-content/uploads/2019/07/Untitled.png" ></img>
                        </center>
                        <h4 className={style.title}>Aplikasi Gojek</h4>
                        <p className={style.teks}>Aplikasi ini berguna untuk memudahkan kita untuk memesan ojek secara online dengan menentukan lokasi yang ingin dikunjungi dan biaya yang sepadan telah ditentukan.</p>
                    </div>

                    <div className={style.card}>
                        <center>
                            <img className={style.thumbnail} src="https://assets.grab.com/wp-content/uploads/sites/4/2021/04/15151634/Grab_Logo_2021.jpg" ></img>
                        </center>
                        <h4 className={style.title}>Aplikasi Grab</h4>
                        <p className={style.teks}>Grab adalah Perusahaan teknologi asal Malaysia yang berkantor di Singapura yang menyediakan aplikasi layanan transportasi angkutan umum meliputi kendaraan bermotor roda 2 maupun roda 4.</p>
                    </div>

                    <div className={style.card}>
                        <center>
                            <img className={style.thumbnail} src="https://1000logos.net/wp-content/uploads/2021/02/Shopee-Logo-2015.png" ></img>
                        </center>
                        <h4 className={style.title}>Aplikasi Shopee</h4>
                        <p className={style.teks}>Shopee adalah aplikasi Marketplace online untuk jual beli di ponsel dengan mudah dan cepat.</p>
                    </div>

                    <div className={style.card}>
                        <center>
                            <img className={style.thumbnail} src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1598609040/fqma8jkwgzlx4ruwdu2n.jpg" ></img>
                        </center>
                        <h4 className={style.title}>Aplikasi Tokopedia</h4>
                        <p className={style.teks}>Aplikasi Tokopedia adalah platform jual-beli digital yang biasa kita sebut sebagai toko online.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}



export default Proyek