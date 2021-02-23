import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, TextField, } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditUser(props) {
       const { handleChange, handleEdit, curUserValue  } = props;
      const validations = (element)=>{
        switch(element){
          case "username": {
            return curUserValue?.name?.length<6?true:false;
          }
          default:{
            return false;
          }
        }
      }
      
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit User Details</h2>
            <Box spacing={0} display="flex" justifyContent="center">
                <Box  xs={12} sm={10} flexGrow={2}>
                    <br/>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="Username"
                                variant="outlined"
                                required
                                fullWidth
                                id="Username"
                                label="Username"
                                autoFocus
                                error = {validations("username")}
                                onChange= {(e)=>handleChange(e.target.value,"name")}
                                value={curUserValue.name}
                                helperText = {validations("username")?"Minimum character length is 10":""}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                onChange= {(e)=>handleChange(e.target.value,"age")}
                                value={curUserValue.age}
                                variant="outlined"
                                required
                                fullWidth
                                id="Age"
                                label="Age"
                                name="Age"
                                autoComplete="lname"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                error={validations("email")}
                                onChange= {(e)=>handleChange(e.target.value,"email")}
                                value={curUserValue.email}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                helperText={validations("email")?"Enter a Valid Email":""}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                onChange= {(e)=>handleChange(e.target.value,"password")}
                                value={curUserValue.password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            </Grid>
                            <Grid item xs={6}>
                            <RadioGroup row aria-label="position" name="position" defaultValue={curUserValue.gender} value={curUserValue.gender} onChange= {(e)=>handleChange(e.target.value,"gender")}>
                                <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                            </RadioGroup>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e)=>{
                            e.preventDefault();
                            handleEdit();
                            }}
                        >
                            Edit
                        </Button>
                        </form>
                </Box>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}