import React from "react";
import { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core"; 
const initialFValues = {
  id: '0',
  Name: '',
  FamilyName: '',
  Email: '',
  Mobile: '',
  Gender: 'male',
  StartUpId: '',
  isPermanent: false,
};

const AddAdmin = () => {
  const [values, setValues] = useState(initialFValues);

  return (
    <form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Name" 
            value={values.Name} 
          />
          <TextField
            variant="outlined"
            label="Family Name" 
            value={values.FamilyName}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default AddAdmin;
