import { useState, useEffect } from 'react';
import crystals from '../crystals.json'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import TagInput from '../components/TagInput'


function Filter() {
    const [name, setName] = useState("")
    const [tags, setTags] = useState([])
    const [availableTags, setAvailableTags] = useState([])
    const [items, setItems] = useState([])
    const [filterFavs, setFilterFavs] = useState(false);

    const addTag = (tag) => {
      if (availableTags.includes(tag) && !tags.includes(tag)) {
          setTags([...tags, tag]);
      }
    }

    useEffect( () => {
      document.getElementById("favs-checkbox").checked = filterFavs;
    }, [filterFavs]); 

    useEffect( () => {
      setAvailableTags([...new Set(crystals.map( (crystal) => crystal.tags).flat(1))])
    }, [tags] )

    useEffect( () => {
        //populate Cards with, well, cards
        let items = crystals;
        items = items.filter( (item) => {
              let value = item.name.toLowerCase();
              let keyword = name.toLowerCase();
              return (value.indexOf(keyword) !== -1
              && ( tags.length > 0 ? tags.every(v => item.tags.includes(v)) : true)
              && ( filterFavs === true ? JSON.parse(localStorage.favs).includes(item.id)  : true)
              );
          } )
        setItems(items);
    }, [name, tags, filterFavs] )

    return (
      <>
        <Navbar/>
        <div className='Wrapper-max-width'>
        <div className="Search-boxes-wrapper">
        <input
            placeholder="Type name here..."
            type="text"
            name="search-input"
            className="Filter-search-input"
            id="search-input"
            onChange={(e) => setName(e.target.value)}
        />
        <TagInput
          tags={tags}
          setTags={setTags}
          availableTags={availableTags}
          addTag={addTag}
          filterFavs={filterFavs}
          setFilterFavs={setFilterFavs}
        />
        </div>
        <div className="Filter-card-wrapper">
          {items.map( (item) => {
            const {name, id, desc, tags, img} = item;
            return (
              <Card addTag={addTag} name={name} id={id} desc={desc} tags={tags} img={img} key={id}/>
            )
          } )}
        </div>
      </div>
      </>
    )
}

export default Filter;
