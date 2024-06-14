function Card({item, id, handleClick,backroundImage}){
    const itemClass = item.stat ? " active " + item.stat : ""

    const cardStyle = {
        backgroundImage: `url(${'/img/Back_1.png'})`,
        backgroundSize: '142px 200px', 
        backgroundRepeat: 'no-repeat', 
      };

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)} style={cardStyle}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Card