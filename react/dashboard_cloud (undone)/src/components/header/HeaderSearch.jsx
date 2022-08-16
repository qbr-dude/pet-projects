import React from 'react';
import Input from '../UI/Input';

const HeaderSearch = () => {
    return (
        <div className="flex w-3/5 justify-around px-32">
            <Input placeholder="Search Files ... " />
            <select name="search-filter" id="" className="w-1/4 ml-4 cursor-pointer p-2 border rounded-md" defaultValue="Filter">
                <option className="py-1 " value="Filter" disabled hidden>Filter</option>
                <option className="py-1 " value="by Date">Docs</option>
                <option className="py-1 " value="by Size">Images</option>
                <option className="py-1 " value="by Size">Music</option>
            </select>
        </div>
    );
}

export default HeaderSearch;
