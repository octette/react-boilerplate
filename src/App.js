import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// Style
import './styles/layout.scss';
//Components - Containers
import Header from './containers/Header';
import LoremSection from './containers/LoremSection';

const supportsHistory = 'pushState' in window.history;

const sections = [
  {
    title: "What is Lorem Ipsum?",
    article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"    
  },
  {
    title: "Why do we use it?",
    article: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
  },
  {
    title: "Where does it come from?",
    article: "Contrary to popular belief, Lorem Ipsum is not simply"
  },
  {
    title: "Where does it come from?",
    article: "Contrary to popular belief, Lorem Ipsum is not simply"
  }
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <Helmet key="helmet" titleTemplate="%s - Leechr" defaultTitle="Leechr - App" />
        <BrowserRouter forceRefresh={!supportsHistory} keyLength={12}>
          <Switch key="router">
          <Route
            path="/home" 
            render={() => (
              <div>
                <Header />
                <LoremSection title={sections[0].title}  article={sections[0].article}/>/>
              </div>
            )}
            exact
          />
          <Route
            path="/account" 
            render={() => (
              <div>
                <Header />
                <LoremSection title={sections[1].title}  article={sections[1].article}/>
              </div>
            )}
            exact
          />
          <Route
            path="/payment" 
            render={() => (
              <div>
                <Header />
                <LoremSection title={sections[2].title}  article={sections[2].article}/>/>
              </div>
            )}
            exact
          />
          <Route
            path="/settings" 
            render={() => (
              <div>
                <Header />
                <LoremSection title={sections[3].title}  article={sections[3].article}/>/>
              </div>
            )}
            exact
          />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
