import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Card from "./components/Card";
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Data from './data/data.json';

// Initial class component where initial state is created via a constructor
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      loading: true,
      cards: []
    };
    // Bind method, binds the this keyword to the function that is calling it
    this.toggleLogo = this.toggleLogo.bind(this);
    this.showBack = this.showBack.bind(this);
    this.showFront = this.showFront.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  // ComponentWillMount
  componentWillMount() {
    this.setState({
      cards: data, 
    });
  }

  // ComponentDidMount
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false}), 3000);
  }
  // ToggleLogo function passes event that uses conditional rendering of prev state to
  // determine the current state
  toggleLogo(event) {
    this.setState(prevState => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  showBack(card) {
    clickCard(card) {
      let cards = this.state.cards;
      cards[card.id].animation = "card card-flip";
      console.log(cards);
  
      this.setState({
        cards
      });
    }
  }

  showFront(card) {
    clickCard(card) {
      let cards = this.state.cards;
      cards[card.id].animation = "card";
      console.log(cards);
  
      this.setState({
        cards
      });
    }
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              this.state.toggleLogo
                ? "static-logo"
                : "static-logo animated jello"
            }
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
            onClick={this.openNav}
          />
         <Navigation closeNav={this.closeNav} />
        </header>
        {
          this.state.loading ? <Loading /> : 
          <div className="Grid animated bounceInUp">
          {this.state.cards.map(card => (
            <Card
              duration={150}
              key={card.id}
              card={card}
              showBack={this.showBack}
              showFront={this.showFront}
            />
          ))}
        }
        </div>
        }
      </div>
    );
  }
}

export default App;
