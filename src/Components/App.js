import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Writer from './Writer'

import Layout from './Layout'
import Setting from './Setting'
import Login from './Login'

export default class extends Component {
 

  render() {

    return <BrowserRouter>
      <Layout >
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route  path="/Writer" component={Writer} />
          <Route  path="/Setting" component={Setting} />
          <Route  path="/Login" component={Login} />
         
          
        </Switch>
      </Layout>
    </BrowserRouter>
  }
}
