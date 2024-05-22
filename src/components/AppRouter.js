import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Prologue from '../pages/Prologue';
import Repereschrono from '../pages/Repereschrono';
import Chapitre1partA from '../pages/Chapitre1partA';
import Chapitre1partB from '../pages/Chapitre1partB';

import Chapitre2partA from '../pages/Chapitre2partA';
import Chapitre2partB from '../pages/Chapitre2partB';
import Chapitre2partC from '../pages/Chapitre2partC';
import Chapitre2partD from '../pages/Chapitre2partD';

import Chapitre3partA from '../pages/Chapitre3partA';
import Chapitre3partB from '../pages/Chapitre3partB';
import Chapitre3partC from '../pages/Chapitre3partC';
import Chapitre3partD from '../pages/Chapitre3partD';

import Chapitre4sc1partA from '../pages/Chapitre4sc1partA';
import Chapitre4sc1partB from '../pages/Chapitre4sc1partB';

import Chapitre4sc2partA from '../pages/Chapitre4sc2partA';
import Chapitre4sc2partB from '../pages/Chapitre4sc2partB';
import Chapitre4sc2partC from '../pages/Chapitre4sc2partC';
import Chapitre4sc2partD from '../pages/Chapitre4sc2partD';
import Chapitre4sc2partE from '../pages/Chapitre4sc2partE';

import Chapitre4sc3partA from '../pages/Chapitre4sc3partA';
import Chapitre4sc3partB from '../pages/Chapitre4sc3partB';
import Chapitre4sc3partC from '../pages/Chapitre4sc3partC';
import Chapitre4sc3partD from '../pages/Chapitre4sc3partD';
import Chapitre4sc3partE from '../pages/Chapitre4sc3partE';
import Chapitre4sc3partF from '../pages/Chapitre4sc3partF';

import Chapitre5partA from '../pages/Chapitre5partA';
import Chapitre5partB from '../pages/Chapitre5partB';
import Chapitre5partC from '../pages/Chapitre5partC';

import Epilogue from '../pages/Epilogue';
import RefBibli from '../pages/RefBibli';
import Remerciements from '../pages/Remerciements';




const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prologue" element={<Prologue />} />
        <Route path="/repereschrono" element={<Repereschrono />} />

        <Route path="/chapitre1partA" element={<Chapitre1partA />} />
        <Route path="/chapitre1partB" element={<Chapitre1partB />} />

        <Route path="/chapitre2partA" element={<Chapitre2partA />} />
        <Route path="/chapitre2partB" element={<Chapitre2partB />} />
        <Route path="/chapitre2partC" element={<Chapitre2partC />} />
        <Route path="/chapitre2partD" element={<Chapitre2partD />} />

        <Route path="/chapitre3partA" element={<Chapitre3partA />} />
        <Route path="/chapitre3partB" element={<Chapitre3partB />} />
        <Route path="/chapitre3partC" element={<Chapitre3partC />} />
        <Route path="/chapitre3partD" element={<Chapitre3partD />} />

        <Route path="/chapitre4sc1partA" element={<Chapitre4sc1partA />} />
        <Route path="/chapitre4sc1partB" element={<Chapitre4sc1partB />} />

        <Route path="/chapitre4sc2partA" element={<Chapitre4sc2partA />} />
        <Route path="/chapitre4sc2partB" element={<Chapitre4sc2partB />} />
        <Route path="/chapitre4sc2partC" element={<Chapitre4sc2partC />} />
        <Route path="/chapitre4sc2partD" element={<Chapitre4sc2partD />} />
        <Route path="/chapitre4sc2partE" element={<Chapitre4sc2partE />} />

        <Route path="/chapitre4sc3partA" element={<Chapitre4sc3partA />} />
        <Route path="/chapitre4sc3partB" element={<Chapitre4sc3partB />} />
        <Route path="/chapitre4sc3partC" element={<Chapitre4sc3partC />} />
        <Route path="/chapitre4sc3partD" element={<Chapitre4sc3partD />} />
        <Route path="/chapitre4sc3partE" element={<Chapitre4sc3partE />} />
        <Route path="/chapitre4sc3partF" element={<Chapitre4sc3partF />} />

        <Route path="/chapitre5partA" element={<Chapitre5partA />} />
        <Route path="/chapitre5partB" element={<Chapitre5partB />} />
        <Route path="/chapitre5partC" element={<Chapitre5partC />} />

        <Route path="/epilogue" element={<Epilogue />} />
        <Route path="/refbibli" element={<RefBibli />} />
        <Route path="/remerciements" element={<Remerciements />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;