import google from '../images/google.svg'
import logo from '../images/logo.svg'
import headlogo from '../images/headlogo.svg'
import excel from '../images/excel.svg'
import './Pagestyle.css'
import { Add, FilterAlt, Search } from '@mui/icons-material'
import React from 'react'

export {
    google,
    logo,
    headlogo,
    excel,
}

export const SearchComponent = () => {
    return (
        <div className="searchbar">
            <input type="text" name="search" id="search" placeholder='Search' />
            <Search />
        </div>
    )
}
export const FilterComponent = () => {
    return (
        <div className="Filter">
            <button type='button'><FilterAlt />Filters</button>
        </div>
    )
}
export const AddComponent = () => {
    return (
        <div className="Add">
            <button type='button'></button>
        </div>
    )
}
export const TableComponent = () => {
    return (
        <div className="Table">
            <table>
                <th>Name</th>
                <th>date</th>
                <th>id</th>
                <th>sa</th>
                <th>as</th>
                <tbody>
                    <tr>
                        <td>dasads</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
