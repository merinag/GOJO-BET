import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin';
import Header from './component/Header';
import PrivateRoute from './component/PrivateRoutr';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/updateListing';


import About from './pages/about';
import Signup from './pages/signup';
import Profile from './pages/profile';
import Home from './pages/home';
import Search from './pages/search';
import Listing from './pages/LIsting';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}