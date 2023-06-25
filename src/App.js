import React, { useState, useEffect } from "react";
import ListPok from "./ListPok";
import axios from "axios";
import Pagiantion from "./Pagiantion";
function App() {
  const [pokemon, setPokemon] = useState([]);

  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => (p.name)));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function previousPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  if (loading) {
    return "loading...";
  }
  return (
    <div className="App">
      <ListPok pokemon={pokemon} />
      <Pagiantion
        previous={previousPageUrl? previousPage:null}
        next={nextPageUrl? nextPage: null}
      />
    </div>
  );
}

export default App;
