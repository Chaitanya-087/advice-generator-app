import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/card.css';
import Divider from '../images/pattern-divider-mobile.svg';
import Dice from '../images/icon-dice.svg'
import { CircularProgress } from "@mui/material";

const Card = () => {
  const [Advice, setAdvice] = useState('')
  const [Click, setClick] = useState(0)
  const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => setAdvice(data.slip))
  }, [Click])

  return (
    <div className="wrapper">
      <p className="title">advice{'  '}{'#' + Advice.id}</p>
      {
        Advice ? (<q className="quote">
          {Advice.advice}
        </q>) : <CircularProgress color="grey" />
      }
      <div>
        <img className="divider" src={Divider} alt="divider" />
      </div>
      <button className="btn" title="generate-button"  onClick={() => setClick(!Click)}>
        <img className="dice"  src={Dice} alt="" />
      </button>
    </div>
  );
};

export default Card;
