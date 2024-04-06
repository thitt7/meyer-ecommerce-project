import React from 'react';
import PriceFilter from './PriceFilter';
import TypeFilter from './TypeFilter';
import RatingFilter from './RatingFilter';
import ColorFilter from './ColorFilter';
import ResultsFilter from './ResultsFilter';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const FilterProducts = () => {
    return (
        <>
            <h2>Filters</h2>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3>Price</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <PriceFilter />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3>Product Type</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <TypeFilter />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3>Rating</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <RatingFilter />
                </AccordionDetails>
            </Accordion><Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3>Color</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <ColorFilter />
                </AccordionDetails>
            </Accordion><Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h3>Results</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <ResultsFilter />
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default FilterProducts