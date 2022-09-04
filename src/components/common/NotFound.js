import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class NotFound extends Component {
  render() {
    return (
      <Container fluid>
        <div className='text-center mt-5'>
        <h1 className='notfound-text'>404</h1>
        <h3> Böyle bir sayfa bulunamadı, URL'yi kontrol eder misin :) </h3>
        <div className='mt-5'><Link to={"/"} className='notfound-link'> Anasayfaya gitmek için tıkla</Link></div>
        
        </div>
      </Container> 
    )
  }
}
