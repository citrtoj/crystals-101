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
    const [cookies, setCookies] = useState();

    useEffect( () => {
      return () => {

      }
    }, [])

    useEffect( () => {
      //preluam arrayurile de la fiecare cristal, le mergeuim cu flat cu depth 1, le transformam in Set (multime) si le spreaduim inapoi intr un array
      setAvailableTags([...new Set(crystals.map( (crystal) => crystal.tags).flat(1))])
    }, [tags] )

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
          items = items.filter( (item) => {
            let value = item.name.toLowerCase();
            let searchedValue = name.toLowerCase();
            return (value.indexOf(searchedValue) !== -1 && tags.every(v => item.tags.includes(v)));
          } )
        }
        setItems(items);
    }, [name, tags] )

    return (
      <>
        <Navbar/>
        <div className='Wrapper-max-width'>
        <div className="Search-boxes-wrapper">
        <input
            placeholder="Type ahead!"
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
        />
        </div>
        <div className="Filter-card-wrapper">
          {items.map( (item) => {
            const {name, id, desc, tags, img} = item;
            return (
              <Card name={name} id={id} desc={desc} tags={tags} img={img}/>
            )
          } )}
        </div>
      </div>
      </>
    )
}

export default Filter;
