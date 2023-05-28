
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  MenuItem,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { Span } from "../Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../actions/dealer";
import { getSpecies } from "../../actions/species";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const AddCar = () => {
    const {loader,oemSpecies} = useSelector(({species})=>species)
    const[model,setModel]=useState([])
    const dispatch = useDispatch()
  const [state, setState] = useState({carImage:"",
    kms:0,
    majorScratches:"no",
    color:"",
    accidentsReported:0,
    previousBuyers:"",
    registrationPlace:"",
    oemDetails:"",
    price:0});

    useEffect(()=>{
       dispatch(getSpecies())
    },[])

  const handleSubmit = (event) => {
    console.log(state)
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };


  const {
    carImage,
    kms,
    majorScratches,
    color,
    accidentsReported,
    previousBuyers,
    registrationPlace,
    oemDetails,
    price,
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

          <TextField
                    select
                    fullWidth
                    name="oemDetails"
                    type="text"
                    label="Select Oem Details"
                    onChange={handleChange}
                    errorMessages={["this field is required"]}
                    value={oemDetails.name}
                    validators={["required"]}
                    sx={{ mb: 1.5 }}
                     >
                   <MenuItem disabled value="">
                     <em>None</em>
                   </MenuItem>
                    {oemSpecies?.length && oemSpecies.map((ele)=><MenuItem value={ele}>{ele.name}</MenuItem>)}
              </TextField>

              {setModel.length>0 && <TextField
                    select
                    fullWidth
                    type="text"
                    label="Select Oem Model"
                    onChange={(e)=>setState({...state,oemDetails:{...oemDetails,models:e.target.value}})}
                    errorMessages={["this field is required"]}
                    value={oemDetails}
                    validators={["required"]}
                    sx={{ mb: 1.5 }}
                     >
                   <MenuItem disabled value="">
                     <em>None</em>
                   </MenuItem>
                    {model?.length && model.map((ele)=><MenuItem value={ele}>{ele.name}</MenuItem>)}
              </TextField>}

            <TextField
              type="text"
              name="carImage"
              id="standard-basic"
              value={carImage }
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="carImage"
              validators={["required"]}
            />

              

            <TextField
              type="number"
              name="kms"
              label="Kms"
              onChange={handleChange}
              value={kms}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
             select
              type="text"
              name="majorScratches"
              label="MajorScratches"
              value={majorScratches }
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
             >
                <MenuItem disabled value="">
                     <em>None</em>
                   </MenuItem>
                   <MenuItem value={"no"}>no</MenuItem>
                   <MenuItem value={"yes"}>Yes</MenuItem>
             </TextField>

            <TextField
              sx={{ mb: 4 }}
              type="text"
              name="color"
              label="Color"
              onChange={handleChange}
              value={color}
              errorMessages={["this field is required"]}
              validators={["required"]}
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="accidentsReported"
              value={accidentsReported}
              label="Accidents Reported"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              select
              name="previousBuyers"
              type="text"
              label="Previous Buyers"
              value={previousBuyers}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            >
                   <MenuItem disabled value="">
                     <em>None</em>
                   </MenuItem>
                   <MenuItem value={"First Owner"}>First Owner</MenuItem>
                   <MenuItem value={"Second Owner"}>Second Owner</MenuItem>
                   <MenuItem value={"Third Owner"}>Third Owner</MenuItem>
            </TextField>
            <TextField
              type="text"
              name="registrationPlace"
              onChange={handleChange}
              label="RegistrationPlace"
              value={registrationPlace}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            
            <TextField
              type="text"
              name="price"
              onChange={handleChange}
              label="Sell Price"
              value={price}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default AddCar;