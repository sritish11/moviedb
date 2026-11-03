import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import Toprated from "./components/Toprated";
import Upcoming from "./components/Upcoming";
import Pagenotfound from "./components/Pagenotfound";
import Singlemovie from "./components/Singlemovie";
import Searchmovie from "./components/Searchmovie";
import C1 from "./components/C1";
import C10 from "./components/C10";

const moviedbRoute = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="top-rated" element={<Toprated />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="single-movie/:movieid" element={<Singlemovie />} />
        <Route path="search-movie/:moviedata" element={<Searchmovie />} />
        <Route path="*" element={<Pagenotfound />} />
        {/* <Route path="c1" element={<C1 />} /> */}
        {/* <Route path="c10" element={<C10 />} /> */}

      </Route>
    </Routes>
  </BrowserRouter>
);

export default moviedbRoute;