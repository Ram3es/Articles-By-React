import React ,{ useState } from 'react';
import useStyles from "./styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch} from "react-redux";
import { getAllArticles } from "../../store/selectors";
import { actions } from "../../../../store/actions";
import { byFieldABC } from "../../../../shared"


const SelectInput =() =>{
    const classes = useStyles();
    const dispatch = useDispatch()
    const [sorted, setSorted] = useState('');
    const articles = useSelector(getAllArticles())

  const handleChange = (event) => {
    setSorted(event.target.value);
    if( event.target.value === "ABC" ){
        console.log(articles)
        articles.sort(byFieldABC("title"))
        //dispatch(actions.FETCH_ARTICLES.SUCCESS(articles))
    } else if(event.target.value === "ABC" ){
      articles.sort(byFieldCBA("title"))
    }

  };

    return (
    <FormControl variant="outlined" className={classes.formControl}>
    <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      value={sorted}
      onChange={handleChange}
      label="Sort"
    >
      <MenuItem value="">
        <em>Sorted by</em>
      </MenuItem>
      <MenuItem value="ABC">abc</MenuItem>
      <MenuItem value="CBA">cba</MenuItem>
    </Select>
  </FormControl>)
}

export default SelectInput;

