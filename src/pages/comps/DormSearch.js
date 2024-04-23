import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";

// Figure out a way to get this data from the database using React Query
const dormList = [
  "Bellingrath",
  "White",
  "Glassell",
  "East Village",
  "West Village",
  "Ellet",
  "Robb",
  "Trezevant",
 
];



const DormSearch = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["dormList"],
    queryFn: () =>
      axios.get("http://localhost:8080/dorm/all-dorms").then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <Autocomplete
        disablePortal
        id="dormSearch"
        options={data}
        getOptionLabel={(options) => options["bldgName"]}
        renderInput={(params) => <TextField {...params} label="Dorm" />}
      />
  );
};

export default DormSearch;
