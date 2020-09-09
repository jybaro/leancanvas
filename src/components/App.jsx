import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import New from '../pages/New';
import WorkSpace from '../pages/WorkSpace';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: '',
        name: '',
        email: '',
      },
    };
  }

  handleNewFormChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleNewFormSubmit = () => {};
  myNew = () => (
    <New
      onNewFormChange={this.handleNewFormChange}
      onNewFormSubmit={this.handleNewFormSubmit}
      newFormValues={this.state.form}
      form={this.state.form}
    />
  );
  myWorkSpace = () => <WorkSpace form={this.state.form} />;
  myHome = () => <Home form={this.state.form} />;
  render = () => (
    <BrowserRouter>
      <Layout form={this.state.form}>
        <Switch>
          <Route path="/new" render={this.myNew} />
          <Route path="/workspace" render={this.myWorkSpace} />
          <Route exact path="/" render={this.myHome} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
