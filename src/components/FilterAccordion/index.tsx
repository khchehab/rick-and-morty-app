import AccordionSummary from "@mui/material/AccordionSummary";
import FilterListIcon from "@mui/icons-material/FilterList";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import { CharacterFilter } from "../../types";

function FilterAccordion({
    filter,
    onFilterChange,
    onApply,
    onClear,
}: {
    filter: CharacterFilter;
    onFilterChange: (name: string, value: string) => void;
    onApply: () => void;
    onClear: () => void;
}) {
    function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target as HTMLInputElement;
        if (name) {
            onFilterChange(name, value);
        }
    }

    return (
        <Accordion
            square={true}
            sx={{
                marginTop: "10px",
                backgroundColor: "#3c3e44",
            }}>
            <AccordionSummary
                expandIcon={
                    <FilterListIcon
                        fontSize="small"
                        sx={{ color: "white" }}
                    />
                }>
                <Typography
                    color="white"
                    component="span">
                    Filters
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid
                    container
                    spacing={2}>
                    <Grid size={4}>
                        <TextField
                            id="name-filter"
                            label="Name"
                            name="name"
                            variant="outlined"
                            fullWidth={true}
                            value={filter.name}
                            onChange={handleFilterChange}
                        />
                    </Grid>
                    <Grid size={4}>
                        <FormControl fullWidth={true}>
                            <InputLabel id="status-filter-label">
                                Status
                            </InputLabel>
                            <Select
                                labelId="status-filter-label"
                                id="status-filter"
                                label="Status"
                                name="status"
                                value={filter.status}
                                onChange={handleFilterChange}>
                                <MenuItem value={""}>
                                    &lt;Choose a status&gt;
                                </MenuItem>
                                <MenuItem value={"alive"}>Alive</MenuItem>
                                <MenuItem value={"dead"}>Dead</MenuItem>
                                <MenuItem value={"unknown"}>unknown</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={4}>
                        <FormControl fullWidth={true}>
                            <InputLabel id="gender-filter-label">
                                Gender
                            </InputLabel>
                            <Select
                                labelId="gender-filter-label"
                                id="gender-filter"
                                label="Gender"
                                name="gender"
                                value={filter.gender}
                                onChange={handleFilterChange}>
                                <MenuItem value={""}>
                                    &lt;Choose a gender&gt;
                                </MenuItem>
                                <MenuItem value={"female"}>Female</MenuItem>
                                <MenuItem value={"male"}>Male</MenuItem>
                                <MenuItem value={"genderless"}>
                                    Genderless
                                </MenuItem>
                                <MenuItem value={"unknown"}>unknown</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </AccordionDetails>
            <AccordionActions>
                <Button
                    sx={{ color: "white" }}
                    size={"small"}
                    onClick={onApply}>
                    Apply
                </Button>
                <Button
                    sx={{ color: "white" }}
                    size={"small"}
                    onClick={onClear}>
                    Clear
                </Button>
            </AccordionActions>
        </Accordion>
    );
}

export default FilterAccordion;
