import React, { useState } from 'react';
import Input from './UI/Input';

const SearchField = ({ fetch }) => {
    const [searchActive, setSearchActive] = useState(false);

    function handleSubmit(event) {
        if (!searchActive) return;

        event.preventDefault();
        const value = event.target[0].value;
        if (value) {
            setSearchActive(false);
            handleSearchForm();
            fetch(value);
        }
    }

    function handleSearchForm() {
        const searchField = document.getElementById('search-field');
        const searchBtn = document.getElementById('search-btn');

        if (!searchActive) {
            setSearchActive(true);
            document.querySelector('#search-field form input').focus();
            const fieldInfoWidth = document.getElementById('field-info').clientWidth;
            searchField.style.width = fieldInfoWidth - 5 + 'px';
            searchField.classList.toggle('opacity-100');
            searchBtn.classList.toggle('hidden');
        } else {
            setSearchActive(false);
            searchField.style.width = 0;
            searchField.classList.toggle('opacity-100');
            searchBtn.classList.toggle('hidden');
        }
    }

    return (
        <div className="flex absolute bottom-full p-1 bg-white bg-opacity-70" style={{}}>
            <div className="flex w-0 transition-width duration-300 opacity-0" id="search-field">
                <form onSubmit={(event) => handleSubmit(event)} className="w-full">
                    <Input />
                </form>
                <button onClick={() => handleSearchForm()} className="bg-close bg-cover bg-center w-0 h-10 px-5" />
            </div>
            <button onClick={() => handleSearchForm()} className="transition delay-300 bg-search bg-cover bg-center w-10 h-10 px-5" id="search-btn" title="Select another City" />
        </div>
    );
}

export default SearchField;
