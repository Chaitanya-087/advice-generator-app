import '../styles/card.css';
import Divider from '../images/pattern-divider-mobile.svg';
import Dice from '../images/icon-dice.svg'
import { CircularProgress } from "@mui/material";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Card = () => {
  const { data, isLoading, refetch } = useQuery(['advice'], () => {
    return axios.get('https://api.adviceslip.com/advice').then(res => res.data.slip)
  })


  return (
    <div className="wrapper">
      <p className="title">advice {'#' + data?.id}</p>
      {
        isLoading ? <CircularProgress /> : <q className="quote">{data?.advice}</q>
      }
      <div>
        <img className="divider" src={Divider} alt="divider" />
      </div>
      <button className="btn" title="generate-button" onClick={refetch}>
        <img className="dice" src={Dice} alt="dice"/>
      </button>
    </div>
  );
};

export default Card;
