import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/card.css';
import Divider from '../images/pattern-divider-mobile.svg';
import Dice from '../images/icon-dice.svg'
import { CircularProgress } from "@mui/material";

const Card = () => {
  const [Advice, setAdvice] = useState('')
  const [Click, setClick] = useState(0)
  const [isLoading,setLoading] = useState(false)
  const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    setLoading(true)
    const apiGet = async () => {
      const response = await fetch(url)
      const data = await response.json()
      const slip = await data.slip
      setAdvice(slip)
      setLoading(false)
    }
    apiGet()
  }, [Click])

  return (
    <div className="wrapper">
      <p className="title">advice {'#' + Advice.id}</p>
      {
        isLoading ? <CircularProgress /> : <q className="quote">
          {Advice.advice}
        </q>
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
