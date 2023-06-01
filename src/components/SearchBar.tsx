import React, { useEffect, useRef } from "react";

import useFilterStore from "../stores/filter";

const SearchBar: React.FC = () => {
  const searchTerm = useFilterStore((state) => state.searchTerm);
  const setSearchTerm = useFilterStore((store) => store.setSearchTerm);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.value = searchTerm;
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          name="search"
          ref={ref}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;