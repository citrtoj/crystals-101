import React, { useState } from 'react'
import './TagInput.scss'
 
const TagInput = (props) => {
    const { tags, setTags, availableTags, addTag, filterFavs, setFilterFavs } = props;
    const [ tagList, setTagList ] = useState([]);

    const handleClickCheckbox = event => {
        setFilterFavs(!filterFavs);
    }

    const handleKeyUp = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            addTag(event.target.value);
            if (availableTags.includes(event.target.value) && !tags.includes(event.target.value)) {
                event.target.value = "";
            }
        }
        else {
            if (event.target.value.length < 2) {
                setTagList([]);
            }
            else {
                let items = availableTags.filter( (tag) => {
                    tag = tag.toLowerCase();
                    let keyword = event.target.value.toLowerCase();
                    return (tag.indexOf(keyword) !== -1);
                  } ).slice(0, 3);
                setTagList(items);
            }
        }
    };

    const handleClickTagListOnSearch = (event, tag) => {
        addTag(tag);
        if (availableTags.includes(tag) && !tags.includes(tag)) {
            document.getElementById("tag-input").value = "";
            setTagList([]);
        }
    }

    const removeTag = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    }

    return (
        <div className="tag-input">
            {tags.length !== 0 && <ul className="selected-tags">
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        <span
                            className="icon-x"
                            onClick={() => removeTag(index)} 
                        >&#10006;</span>
                    </li>
                ))}
            </ul>}
            <div className='input-wrapper'>
                <input
                    type="text"
                    onKeyUp={event => handleKeyUp(event)}
                    placeholder="Type tags here..."
                    id="tag-input"
                />
                {
                    tagList.length !== 0 && <ul className={"tag-results"}>
                        {tagList.map( (tag) => {
                            return (<li key={tag} id={"suggested-tag-" + tag}
                                        onClick={(event) => {handleClickTagListOnSearch(event, tag)}}
                                        >{tag}</li>)
                        })}
                    </ul>
                }
            </div>
            <div className="Favs-checkbox-wrapper">
                <label htmlFor="favs-checkbox">Favourites:</label>
                <input type="checkbox"
                       name="favs-checkbox"
                       id="favs-checkbox"
                       onClick={handleClickCheckbox}/>
            </div>
        </div>
    )
}

export default TagInput;