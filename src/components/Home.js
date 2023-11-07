import React,{useState,useEffect} from 'react';
import classes from '../styles/Home.module.css'

function Home() {

  return(
    <>

      <div className={`container-fluid ${classes.extra_ctr} my-5 pt-5`}>
        <div className='row d-flex pt-lg-5 mb-5 justify-content-lg-center w-100 h-100'>
          <div className='col-12 col-lg-6 col-xxl-4 order-1 mb-4 mb-lg-0 d-flex flex-column align-items-start'>
              <h1 className={`${classes.heading} animate__animated animate__fadeInLeft text-light w-100`}>Your </h1>
              <h1 className={`${classes.heading} animate__animated animate__fadeInLeft text-light w-100`}><span style={{background: 'linear-gradient(135deg, #9F8CED, #FA7C0B, #9DE8EE)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>One Stop</span> Solution</h1>
              <h1 className={`${classes.heading} animate__animated animate__fadeInLeft text-light w-100`}>for everything</h1>
              <h5 className={` w-75 animate__animated animate__fadeInLeft my-2 my-lg-5 w-100`} style={{color:'rgb(207,207,207)'}}>Connect, Pay, Trade, and Explore Securely with Oi Chat - the ultimate platform designed to empower users to establish connections.</h5>
              <button onClick={()=>window.location.href='/#download'} className='btn btn-light animate__animated animate__fadeInLeft my-3 my-lg-0'><h4>Download Now</h4></button>      
          </div>
          <div className='col-12 col-lg-5 order-2 my-3 my-lg-0 d-flex justify-content-center'>
            <div className='w-100 d-flex justify-content-center justify-content-lg align-items-center align-items-xl-center'>
              <div className={`animate__animated animate__fadeInRight ${classes.demo_img}`}>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid my-5 pt-5`}>
        <div className='row d-flex pt-5 justify-content-lg-center w-100 h-100'>
          <h1 className={`col-12 text-center text-light ${classes.heading}`} id="features">
            Features
          </h1>
        </div>
        <div className={`row my-5 py-5`}>
          <div className='col-12 w-100'>

            <div className='row w-100 d-flex justify-content-center align-items-center'>
              <div className='col-10 col-lg-3 col-xxl-2 d-flex flex-column mx-lg-5 my-5' style={{backgroundColor:'rgb(21,21,23)'}}>
                <div className={classes.icon_chat}>

                </div>
                <div className='w-100 my-5'>
                  <h4 className='text-light my-2'><b>Chat and Call</b></h4>
                  <p style={{color:'rgb(121,120,120)'}}><b>Unified Conversations: Call and chat seamlessly within one intuitive interface.</b></p>
                </div>
              </div>
              <div className='col-10 col-lg-3 col-xxl-2 d-flex flex-column mx-lg-5 my-5' style={{backgroundColor:'rgb(21,21,23)'}}>
                <div className={classes.icon_trade}>

                </div>
                <div className='w-100 my-5'>
                  <h4 className='text-light my-2'><b>Trade</b></h4>
                  <p style={{color:'rgb(121,120,120)'}}><b>Seamlessly manage crypto and stocks with ease, all within our integrated feature.</b></p>
                </div>
              </div>
            </div>

            <div className='row w-100 d-flex justify-content-center align-items-center'>
              <div className='col-10 col-lg-3 col-xxl-2 d-flex flex-column mx-lg-5 my-5' style={{backgroundColor:'rgb(21,21,23)'}}>
                <div className={classes.icon_discover}>

                </div>
                <div className='w-100 my-5'>
                  <h4 className='text-light my-2'><b>Discover and Share</b></h4>
                  <p style={{color:'rgb(121,120,120)'}}><b> Discover and instantly share life's moments with your friends, family and
                  connections.</b></p>
                </div>
              </div>
              <div className='col-10 col-lg-3 col-xxl-2 d-flex flex-column mx-lg-5 my-5' style={{backgroundColor:'rgb(21,21,23)'}}>
                <div className={classes.icon_marketplace}>

                </div>
                <div className='w-100 my-5'>
                  <h4 className='text-light my-2'><b>Marketplace</b></h4>
                  <p style={{color:'rgb(121,120,120)'}}><b>Sell, buy, or rent seamlessly within our all-inclusive marketplace. Also engage in B2B and B2C transactions</b></p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>

      <div className={`container-fluid ${classes.extra_orange_bg} my-5 pt-5`}>
        <div className='row d-flex pt-lg-5 mb-5 justify-content-lg-center w-100 h-100'>
          <div className='col-5 col-lg-6 col-xxl-5 order-1 mb-4 mb-lg-0 d-flex flex-column align-items-center justify-content-center'>
              <h1 className={`${classes.heading} animate__animated animate__fadeInLeft text-light w-100`} style={{
              background: 'linear-gradient(135deg, #9F8CED, #FA7C0B, #9DE8EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              }}>
                Connect, Pay</h1>
              <h1 className={`${classes.heading} animate__animated animate__fadeInLeft text-light w-100`}>Trade & Explore</h1>
              
              
          </div>
          <div className='col-7 col-lg-5 order-2 my-3 my-lg-0 d-flex justify-content-center'>
            <div className='w-100 d-flex justify-content-center justify-content-lg align-items-center align-items-xl-center'>
              <div className={`animate__animated animate__fadeInRight ${classes.demo_phone}`}>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid my-5 pt-5 d-flex align-items-center justify-content-center'>
          <h1 style={{
              background: 'linear-gradient(135deg, #9F8CED, #FA7C0B, #9DE8EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
          }} className={classes.heading} id='download'>
              Download Now
          </h1>
      </div>

      <div className={`container-fluid ${classes.download_bg} my-5 py-5`}>
        <div className='row d-flex pt-lg-5 mb-5 justify-content-lg-center w-100 h-100'>
          <div className='col-6 col-lg-6 mb-4 mb-lg-0 d-flex flex-column align-items-center justify-content-center'>
          <div className='w-100 d-flex justify-content-center justify-content-lg align-items-center align-items-xl-center'>
              <div className={`animate__animated animate__fadeInRight ${classes.left}`}>

              </div>
            </div>
          </div>
          <div className='col-6 col-lg-5 my-3 my-lg-0 d-flex justify-content-center'>
            <div className='w-100 d-flex justify-content-center justify-content-lg align-items-center align-items-xl-center'>
              <div className={`animate__animated animate__fadeInRight ${classes.right}`}>

              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
    
  )
}

export default Home