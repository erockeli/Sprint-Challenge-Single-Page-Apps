import React from "react";
import Header from "./components/Header.js";


export default function App() {
  return (
    <main>
      <Header/>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characters" component={CharacterList}/>
      <Route exact path="/search" component={SearchForm}/>
      <Route exact path="/location" component={LocationsList}/>
    </main>
  );
}
