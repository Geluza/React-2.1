//import './Portfolio.css'
//import React from 'react';
//import PropTypes from 'prop-types';


export default function Toolbar({filters, selected, onSelectFilter}) {
const SelectFilter = evt => {
    onSelectFilter(evt.target.textContent);
}
return (
    <div className="filters">
    {filters.map(filter => 
    <button className={selected===filter ? "selected_filter" : "filter"} onClick={SelectFilter}>{filter}</button>
    )} 
    </div>
)
}

