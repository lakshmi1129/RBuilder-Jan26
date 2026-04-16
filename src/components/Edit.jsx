import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RiFileEditFill } from "react-icons/ri";
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { HiXMark } from "react-icons/hi2";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="btn text-warning fs-2 me-2"><RiFileEditFill /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* basic details */}
            <div>
                <h3>Personal Details</h3>
                <div className='p-3 row'>
                        <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField id="standard-basic-location" label="Location" variant="standard" />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Job Role</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Role"
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                        </FormControl>
                </div>
            </div>
            {/* contact */}
            <div>
                <h3>Contact Details</h3>
                <div className='p-3 row'>
                        <TextField id="standard-basic-email" label="Email" variant="standard" />
                        <TextField id="standard-basic-phone" label="Contact number" variant="standard" />
                        <TextField id="standard-basic-linkedin" label="LinkedIn Link" variant="standard" />
                        <TextField id="standard-basic-github" label="Github Link" variant="standard" />
                </div>
            </div>
            {/* education */}
            <div>
                <h3>Educational Details</h3>
                <div className='p-3 row'>
                        <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                        <TextField id="standard-basic-college" label="University/College Name" variant="standard" />
                        <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />
                </div>
            </div>
            {/* skills */}
            <div>
                <h3>Skills</h3>
                <div className='p-3 d-flex justify-content-between align-items-center'>
                    <input type="text" placeholder='Add Skill' className='form-control' />
                    <Button variant='text'>Add</Button>
                </div>
                <h5>Added Skills : </h5>
                {/* Display all skills */}
                <div className='p-3 d-flex justify-content-between flex-wrap'>
                    <Button variant='contained' className='my-1'> Skill <HiXMark className='ms-1' /> </Button>
                </div>
            </div>
            {/* summary */}
            <div>
                <h3>Summary</h3>
                <div className='p-3 row'>
                    <TextField id="standard-basic-summary" label="Summary" multiline variant="standard" />
                </div>
            </div>
            {/* update */}
            <button className='btn btn-primary'>Update</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit