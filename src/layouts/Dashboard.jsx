import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" Component={ProductList} />
              <Route exact path="/products" Component={ProductList} />
              <Route path="/products/:id" Component={ProductDetail} />
              <Route exact path="/cart" Component={CartDetail} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Dashboard