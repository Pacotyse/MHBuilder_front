import React, {useState} from 'react'

const searchBar = () => {}

// state (état, données)

const [searchInput, setSearchInput] = useState("");

const armor = [{ name: "Armure en os", talent: "attack" },
{ name: "Armure en bois", talent: "defense" },
{ name: "Armure en fer", talent: "affinity" },
]


  // comportement

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  
  if (searchInput.length > 0) {
      countries.filter((country) => {
      return country.name.match(searchInput);
  });
  }


  // affichage (render)