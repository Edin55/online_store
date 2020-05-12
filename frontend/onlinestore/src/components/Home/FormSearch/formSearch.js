import React from 'react';

const FormSearch = (props) => {

    const onSearch = (e)=>{
        e.preventDefault();
        props.onSearch(e.target["searchTerm"].value);
    }


    return (
        <form onSubmit={onSearch} className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-n3" name={"searchTerm"} type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn ml-n4 btn-outline-black" type="submit"><i className={"fa fa-search"}></i></button>
        </form>
    )
}

export default FormSearch;
