import React from "react";

function ItemListContainer ({greeting}){
    const containerStyle = {
        backgroundColor: 'lightblue',
        color: 'darkblue',
        padding: '20px',
        textAlign: 'center',
    }

    return(
        <div className="item-list-container" style={containerStyle}>
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer;