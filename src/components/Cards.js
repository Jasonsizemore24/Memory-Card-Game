import { useState } from "react"
import Card from './Card'

function Cards() {
    const[items, setItems] = useState([
        {id: 1, img: '/img/Clubs_3.png', stat:""},
        {id: 1, img: '/img/Clubs_3.png', stat:""},
        {id: 2, img: '/img/Clubs_10.png', stat:""},
        {id: 2, img: '/img/Clubs_10.png', stat:""},
        {id: 3, img: '/img/Diamonds_7.png', stat:""},
        {id: 3, img: '/img/Diamonds_7.png', stat:""},
        {id: 4, img: '/img/Diamonds_Q.png', stat:""},
        {id: 4, img: '/img/Diamonds_Q.png', stat:""},
        {id: 5, img: '/img/Hearts_K.png', stat:""},
        {id: 5, img: '/img/Hearts_K.png', stat:""},
        {id: 6, img: '/img/Joker_1.png', stat:""},
        {id: 6, img: '/img/Joker_1.png', stat:""},
        {id: 7, img: '/img/Spades_ACE.png', stat:""},
        {id: 7, img: '/img/Spades_ACE.png', stat:""},
        {id: 8, img: '/img/Spades_J.png', stat:""},
        {id: 8, img: '/img/Spades_J.png', stat:""}
    ].sort(() => Math.random() - 0.5))

    const initialItemsState = [
        {id: 1, img: '/img/Clubs_3.png', stat:""},
        {id: 1, img: '/img/Clubs_3.png', stat:""},
        {id: 2, img: '/img/Clubs_10.png', stat:""},
        {id: 2, img: '/img/Clubs_10.png', stat:""},
        {id: 3, img: '/img/Diamonds_7.png', stat:""},
        {id: 3, img: '/img/Diamonds_7.png', stat:""},
        {id: 4, img: '/img/Diamonds_Q.png', stat:""},
        {id: 4, img: '/img/Diamonds_Q.png', stat:""},
        {id: 5, img: '/img/Hearts_K.png', stat:""},
        {id: 5, img: '/img/Hearts_K.png', stat:""},
        {id: 6, img: '/img/Joker_1.png', stat:""},
        {id: 6, img: '/img/Joker_1.png', stat:""},
        {id: 7, img: '/img/Spades_ACE.png', stat:""},
        {id: 7, img: '/img/Spades_ACE.png', stat:""},
        {id: 8, img: '/img/Spades_J.png', stat:""},
        {id: 8, img: '/img/Spades_J.png', stat:""}
    ].sort(() => Math.random() - 0.5)

    const [prev, setPrev] = useState(-1)

    function resetGame() {
        setItems(initialItemsState.sort(() => Math.random() - 0.5));
        setPrev(-1);
      }
    

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }
    return (
        <div className="game-container">
          <button onClick={resetGame} className="resetButton">Reset Game</button>
          <div className="container">
            {items.map((item, index) => (
              <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
          </div>
        </div>
      );
    }
    
    export default Cards;