import React from "react";

const Filter = () => {
    return (
        <>
         <section className="filter">
            <form action="" className="form-control">
                <input type="search" name="search" id= "search"
                placeholder= "Cari Negara apa" />
            </form>

            <div className="region-filter">
                <select name="select" id="select" className="select" >
                    <option value="Filter by region">Filter by region</option>
                    <option value="America">america</option>
                    <option value="Africa">africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
         </section>
        </>
    )
}

export default Filter