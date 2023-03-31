import React, { /* useEffect, useState */ } from 'react'
import './TagInput.scss'
 
const TagInput = (props) => {
    const {tags, setTags, availableTags} = props;

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            if (availableTags.includes(event.target.value)) {
                setTags([...tags, event.target.value]);
                event.target.value = "";
            }
        }
    };

    const removeTag = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    }

    return (
        
        <div className="tag-input">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                        <span>{tag}</span>
                        <span
                            className="icon-x"
                            onClick={() => removeTag(index)} 
                        >&#10006;</span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Type tags here..."
            />
        </div>
    )
}

export default TagInput