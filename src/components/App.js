// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { ArticleListing } from './ArticleListing';
import { NotFound } from './NotFound';


function App() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" render={() =>
          <ArticleListing
            articles={articles}
            setArticles={setArticles}
          />} exact
        />
        <Route path="*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
