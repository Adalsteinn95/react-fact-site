import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrivia } from '../actions';
import styled, { keyframes } from 'styled-components';

class Starter extends Component {
  componentDidMount(){
      this.props.fetchTrivia();
  }

  handleClick(event) {
    this.props.fetchTrivia();
  }




  render() {
    const facts = this.props.info.data;
    const fadeIn = keyframes`
      from {
        opacity: 0;
        font-size: 2em;
      }

      to {
        opacity: 1;
        font-size: 3em;
      }
      `;

    const Button = styled.button`
    width: 100%;
    border:none;
    outline:none !important;
  	border-radius: 3px;
  	padding: 0.25em 1em;
  	background: transparent;
  	color: black;
    transition: 2s;
    font-family: 'Cagliostro', sans-serif;
    animation: ${fadeIn} 2s linear;
    word-break: keep-all;
    font-size: 3em;
    &:hover{
      color:purple;

    }
  `;
    const Div = styled.div`
    margin: 10em auto;
    text-align: end;

  `;

    return (
      <Div >
        <Button onClick = {this.handleClick.bind(this)} > {facts} </Button>
      </Div>
    );
  }

}

function mapStateToProps(state){
  return{ info: state.facts};
}


export default connect(mapStateToProps, {fetchTrivia})(Starter);
