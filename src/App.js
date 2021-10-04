import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Courses from './Components/Courses/Courses';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';

/* Created Context API*/
export const CourseContext = createContext();

function App() {
  /* Load Fake Data and set State and sending data using Context Api */
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('/fakeLanguageData.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, []);

  return (
    <CourseContext.Provider value={courses}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </CourseContext.Provider>
  );
}

export default App;