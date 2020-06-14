import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './hoc/HeaderContainer/HeaderContainer'
import MainContainer from './hoc/MainContainer/MainContainer'
import WeatherContainer from './containers/Weather-Containers'
import AuthorizationContainer from './containers/Authorization-Container'



class App extends Component {
  state = {
    visible: true
  }

  visibleFunc(e) {
    e.preventDefault();

    this.setState({
      visible: !this.state.visible
    });

    console.log(this.state.visible);
  }


  render() {
    return (
      <Fragment>
        <Header visibleFunc={this.visibleFunc.bind(this)} />
        <MainContainer visible={this.state.visible}>

          <Switch>
            <Route exact path="/" component={WeatherContainer} />
            <Route path="/authorization" component={AuthorizationContainer}/>

            <Route render={ () => <h1>404 Error</h1> }/>
          </Switch>

        </MainContainer>
      </Fragment>

    )
  }
}

export default App
