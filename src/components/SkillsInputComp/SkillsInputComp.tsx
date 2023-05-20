import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


type Props ={
  edit : boolean
}
export const SkillsInputComp = ( edit : Props) => {
  const [skills,setSkills ] = useState('')


  // console.log(skills)
  return (
    <Autocomplete
      multiple
      limitTags={3}
      id="multiple-limit-tags"
      onInputChange={(event,newValue  )=>{setSkills(newValue)}}
      options={userSkills}
      getOptionLabel={(option) => option.title}
      defaultValue={[userSkills[1], userSkills[2], userSkills[3]]}
      renderInput={(params) => (
        <TextField {...params} label="Skills" placeholder="Add Skills" disabled={true} />
      )}
      sx={{ width: '320px' }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const userSkills = [
  { title: 'React',},
  { title: 'Tailwind' },
  { title: 'TypeScript',},
  { title: 'JavaScript' },
  { title: 'Css' },
  { title: "VueJs" },
 
];