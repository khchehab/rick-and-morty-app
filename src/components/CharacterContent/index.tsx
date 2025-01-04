import { useState, useEffect, ChangeEvent } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import FilterAccordion from "../FilterAccordion";
import { Character, CharacterFilter } from "../../types";
import { fetchCharacters } from "../../api";

function CharacterContent() {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [filter, setFilter] = useState<CharacterFilter>({
        name: "",
        status: "",
        gender: "",
    });
    const [characters, setCharacters] = useState<Character[]>([]);

    function handleFilterChange(name: string, value: string) {
        setFilter(function (prev) {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function handleApplyClick() {
        console.log("apply filter clicked");
    }

    function handleClearClick() {
        setFilter({
            name: "",
            status: "",
            gender: "",
        });
    }

    function handlePageChange(event: ChangeEvent, page: number) {
        setCharacters([]);
        setPage(page);
    }

    useEffect(
        function () {
            async function fetchCharactersForPage() {
                const response = await fetchCharacters(page);

                setTotalPages(response.info.pages);
                setCharacters(response.results);
            }

            fetchCharactersForPage();
        },
        [page],
    );

    return (
        <main>
            <FilterAccordion
                filter={filter}
                onFilterChange={handleFilterChange}
                onApply={handleApplyClick}
                onClear={handleClearClick}
            />
            <TableContainer
                component={Paper}
                sx={{
                    marginY: "10px",
                }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "10%" }}>&nbsp;</TableCell>
                            <TableCell sx={{ width: "15%" }}>Name</TableCell>
                            <TableCell sx={{ width: "15%" }}>Status</TableCell>
                            <TableCell sx={{ width: "15%" }}>Species</TableCell>
                            <TableCell sx={{ width: "15%" }}>Gender</TableCell>
                            <TableCell sx={{ width: "15%" }}>Origin</TableCell>
                            <TableCell sx={{ width: "15%" }}>
                                Last Known Location
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.length === 0 && (
                            <TableRow>
                                <TableCell
                                    colSpan={7}
                                    sx={{
                                        textAlign: "center",
                                    }}>
                                    <CircularProgress />
                                </TableCell>
                            </TableRow>
                        )}
                        {characters.length > 0 &&
                            characters.map(function (row: Character) {
                                return (
                                    <TableRow key={`character_${row.id}`}>
                                        <TableCell
                                            sx={{
                                                width: "10%",
                                                padding: "1px 0",
                                            }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}>
                                                <img
                                                    src={row.image}
                                                    alt="character image"
                                                    style={{ height: "60px" }}
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell sx={{ width: "15%" }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell sx={{ width: "15%" }}>
                                            {row.status}
                                        </TableCell>
                                        <TableCell sx={{ width: "15%" }}>
                                            {row.species}
                                        </TableCell>
                                        <TableCell sx={{ width: "15%" }}>
                                            {row.gender}
                                        </TableCell>
                                        <TableCell sx={{ width: "15%" }}>
                                            {row.origin.name}
                                        </TableCell>
                                        <TableCell sx={{ width: "15%" }}>
                                            {row.location.name}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={totalPages}
                boundaryCount={2}
                page={page}
                color={"primary"} /* todo remove this after finalizing themes */
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onChange={handlePageChange}
            />
        </main>
    );
}

export default CharacterContent;
