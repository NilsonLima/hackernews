import React, { Component } from 'react';
import NewsAPI from './news';
import './App.css';

import Article from './components/article';

class App extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  async componentDidMount() {
    const response = await NewsAPI.fetchTopHeadlinesByCategory('general');
    this.setState({ articles: response.articles });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="app">
        <div className="app-feed">
          <div className="app-articles">
            { articles.map(a => (
              <Article key={a.url} article={a} />
            )) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
