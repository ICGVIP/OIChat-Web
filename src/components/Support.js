import React, {useState} from 'react'
import classes from '../styles/Support.module.css'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme,useMediaQuery } from '@mui/material';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
function Support() {

  const theme = useTheme();
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [validated, setValidated] = useState(false);
  let [description,setDesc] = useState("");
  let [finishing,setFinishing]=useState(false);
  const isLgAndUp = useMediaQuery(theme.breakpoints.up('lg'));

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    // event.preventDefault();
    // event.stopPropagation();
    // }

    // setValidated(true);
    // setFinishing(true)
    // if(!email||!pwd){
    //     setFinishing(false)
    //     return toast.error('Please fill all details');
        
    // }
    // let res;
    // if(res.success){
        
    //     setFinishing(false);
       
    // }else{
    //     setFinishing(false)
    //     if(res.message){
    //         toast.error(`${res.message}`)
    //     }
    //     else{
    //         toast.error('Invalid credentials');
    //     }
        
    // }
};

function handleDescChange(e){
  const {value,maxLength} = e.target;
  const words = value.slice(0,maxLength);
  setDesc(words)
}

  return (
    <>
      <div className={`container-fluid my-5 pt-5 img-fluid`}>
        <div className='row d-flex pt-lg-5 mb-5 justify-content-lg-center w-100 '>

          <div className='col-12 col-lg-6 col-xxl-5 order-1 mb-4 mb-lg-0 d-flex flex-column align-items-start'>
                <h1 className='text-light mb-4'>Support Center</h1>
                <h5 className='text-light mb-5'>Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.</h5>

                <FormControl sx={{ m: 1, width: isLgAndUp ? '75%' : '100%' }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                    sx={{bgcolor:'white'}}
                    placeholder="Search..."
                  />
                </FormControl>
          </div>

          <div className={`col-12 col-lg-3 order-2 offset-lg-1 my-3 my-lg-0 d-none d-lg-flex justify-content-center`}>
            <img src='https://oichat.s3.us-east-2.amazonaws.com/assets/rect.png' className='img-fluid'/>
          </div>

          
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row d-flex justify-content-center' >
          <div className='col-10 col-lg-3 col-xxl-2 bg-light rounded p-4'>

            <div className='d-flex align-items-center p-1 mb-4'>
              <img src='https://oichat.s3.us-east-2.amazonaws.com/assets/account.png' className={classes.inline_image}/>
              <h4 className='mx-2 '><b>Account Related Questions</b></h4>
            </div>

            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to log in ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to use discover section ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to log in ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to log in ?</b></h5>
            </div>
          </div>

          <div className='col-10 col-lg-3 col-xxl-2 bg-light rounded my-5 my-lg-0 mx-lg-5 p-4'>

            <div className='d-flex align-items-center p-1 mb-4'>
              <img src='https://oichat.s3.us-east-2.amazonaws.com/assets/use.png' className={classes.inline_image}/>
              <h4 className='mx-2 '><b>How to use ?</b></h4>
            </div>

            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to view catalogues ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to share screen ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to install the app ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to upload an image ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to monetize my account ?</b></h5>
            </div>
          </div>

          <div className='col-10 col-lg-3 col-xxl-2 bg-light rounded p-4'>

            <div className='d-flex align-items-center p-1 mb-4'>
              <img src='https://oichat.s3.us-east-2.amazonaws.com/assets/security.png' className={classes.inline_image}/>
              <h4 className='mx-2 '><b>Security and Privacy</b></h4>
            </div>

            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to hide my content?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to remove my last seen ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to block a contact ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to protect sensitive information ?</b></h5>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <i className="fa-regular d-flex align-items-center fa-file"></i>
              <h5 className='d-flex align-items-center mx-3 pt-1'><b>How to secure crypto wallet ?</b></h5>
            </div>
          </div>

        </div>
      </div>

      <div className='container-fluid my-5 py-lg-5'>
        <div className='row d-flex pt-lg-5 my-lg-5 justify-content-lg-center'>

                <div className='col-12 col-lg-6 col-xxl-5 order-2 order-lg-1 mb-4 mb-lg-0 d-flex flex-column align-items-center pt-5'>
                  <h1 className='text-light mb-4'>Still have questions? We're here to help!</h1>
                  <h5 className='text-light mb-5' style={{color:'rgb(207,207,207)'}}>Chat with our chat bot by clicking the chat button in the right. We're here to assist you!</h5>
                  
                  <button className='rounded btn btn-success'><h4><i className="fa-regular fa-comment-dots align-middle mx-2"></i>Chat Support</h4></button>
                </div>

                <div className='col-12 col-lg-5 order-1 order-lg-2 my-3 my-lg-0 d-flex justify-content-center'>
                    <div className='w-100 d-flex justify-content-center justify-content-lg align-items-center align-items-xl-center'>
                        <div className={`animate__animated animate__fadeInRight ${classes.ai}`}>

                        </div>
                    </div>
                </div>
        </div>
      </div>

      <div className='container my-lg-5 py-lg-5'>

      </div>
      
      <div className='container-fluid my-5' style={{backgroundColor:'rgb(29,29,29)'}}>
        <div className='row d-flex flex-column pt-5 my-5 justify-content-start'>

              <div className='col-12 col-lg-6 offset-lg-1 col-xxl-3 mb-4 mb-lg-0 d-flex flex-column pt-5'>
                  <h1 className='text-light mb-5'>Get in touch with us</h1>
                  <h5 className='text-light border p-3 rounded' style={{color:'rgb(207,207,207)'}}>Hi there! Need help? Use the form below or email us at info@oichat.com</h5>

              </div>

                <Form noValidate validated={validated} onSubmit={handleSubmit} className='col-12 col-lg-6 col-xxl-3 offset-lg-1 d-flex flex-column p-4'>
                        <Form.Group controlId="validationCustom01" className={`d-flex flex-column align-items-start w-100`}>
                            <Form.Label className={classes.label}>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="name"
                                    placeholder="abc@example.com"
                                    onChange={(e)=>setName(e.target.value)}
                                    className={classes.input}
                                />
                        </Form.Group>
                        <Form.Group controlId="validationCustom02" className={`d-flex flex-column align-items-start w-100 my-3`}>
                            <Form.Label className={classes.label}>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                onChange={(e)=>setEmail(e.target.value)}
                                className={classes.input}
                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom02" className={`d-flex flex-column align-items-start w-100 my-3`}>
                            <Form.Label className={classes.label}>Message</Form.Label>
                            <Form.Control
                              as="textarea" rows={6} 
                              maxLength={350}
                              value={description}
                              onChange={handleDescChange}
                              required
                              className={classes.input}
                            />
                        </Form.Group>
                   
                        <div className='my-4 `d-flex flex-column align-items-start'>
                                <button type='submit' disabled={finishing} className={`w-100 btn rounded-pill ${classes.submit}`}>
                                  Send Query
                                </button>
                        </div>
                </Form>
                
          </div>
      </div>

      <div className={`container-fluid my-5 pt-5 img-fluid`} style={{backgroundColor:'rgb(13,15,45)'}}>
        <div className='row d-flex pt-lg-5 mb-5 justify-content-lg-center w-100 '>

          <div className='col-12 col-lg-6 col-xxl-5 order-1 mb-4 mb-lg-0 d-flex flex-column align-items-start'>
                <h1 className='text-light mb-4'>Contact Information</h1>
                <h5 className='text-light mb-5'>If you want to reach out to us directly, here are the different ways:</h5>

                
                <div className='d-flex align-items-center mb-3'>
                  <i className="fa-solid d-flex align-items-center fa-phone-volume text-light"></i>
                  <h5 className='d-flex align-items-center mx-3 pt-1 text-light'><b>+1 (647)6165278</b></h5>
                </div>
                <div className='d-flex align-items-center mb-3'>
                  <i className="fa-solid d-flex align-items-center fa-envelope text-light"></i>
                  <h5 className='d-flex align-items-center mx-3 pt-1 text-light'><b>info@oichat.com</b></h5>
                </div>
          </div>

          <div className={`d-none col-12 col-lg-3 order-2 offset-lg-1 my-3 my-lg-0 d-lg-flex justify-content-center`}>
            <img src='https://oichat.s3.us-east-2.amazonaws.com/assets/circles.png' className='img-fluid'/>
          </div>

          
        </div>
      </div>

    </>
  )
}

export default Support