import { useState, useEffect } from 'react';
import crystals from '../crystals.json'
import Card from '../components/Card'

function Filter() {
    const [name, setName] = useState("")
    const [tags, setTags] = useState([])
    const [items, setItems] = useState([]);

    useEffect( () => {
        //populate Cards with, well, cards
        let items = crystals;
        if (tags.length === 0) {
            items = items.filter( (value) => {
            value = value.name.toLowerCase();
            let keyword = name.toLowerCase();
            return (value.indexOf(keyword) !== -1);
          } )
        }
        else {
          items = items.filter( (value) => {
            value = value.name.toLowerCase();
            let keyword = name.toLowerCase();
            return (value.indexOf(keyword) !== -1 && tags.every(v => value.tags.includes(v)));
          } )
        }
        setItems(items);
    }, [name, tags] )

    return (
        <div className='Wrapper-max-width'>
          <input
            placeholder="Type ahead!"
            type="text"
            name="search-input"
            id="search-input"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="Filter-card-wrapper">
            {items.map( (item) => {
              const {name, id, desc, tags, img} = item;
              return (
                <Card name={name} id={id} desc={desc} tags={tags} img={img}/>
              )
            } )}
          </div>
        </div>
    )
}

export default Filter;
