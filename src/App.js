import React, { Component } from 'react';
import NewsAPI from './news';
import './App.css';

import Constants from './constants';
import Article from './components/article';
import SearchBar from './components/searchbar';

class App extends Component {
  constructor() {
    super();
    this.state = { category: 'general', page: 1, articles: [] };
    this.setArticlesByCategory();

    this.setArticlesByCategory = this.setArticlesByCategory.bind(this);
    this.handleCategoryPress = this.handleCategoryPress.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  componentDidMount() {
    this.firstCategory.focus();
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  setArticlesByCategory() {
    const { category, page } = this.state;
    NewsAPI
      .fetchTopHeadlinesByCategory(category, page)
      .then(res => this.setState(state => (
        { articles: [...state.articles, ...res.articles] }
      )));
  }

  handleCategoryPress(event, category) {
    event.preventDefault();
    this.setState({ category, page: 1, articles: [] }, this.setArticlesByCategory);
  }

  trackScrolling() {
    const wrapped = document.getElementById('app-container');
    if (wrapped.getBoundingClientRect().bottom <= window.innerHeight) {
      this.setState(state => ({ page: state.page + 1 }), this.setArticlesByCategory);
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <div id="app-container" className="app-container">
        <div className="app-header">
          <SearchBar />
        </div>
        <div className="app-feed">
          <div
            className="app-categories"
            ref={(ref) => { this.categories = ref; }}
          >
            { Constants.Categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className="app-category"
                ref={(ref) => { if (!i) this.firstCategory = ref; }}
                onClick={e => this.handleCategoryPress(e, c)}
              >
                { c }
              </button>
            )) }
          </div>
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
