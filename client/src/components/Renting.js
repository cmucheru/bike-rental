import React, {useState} from 'react'
//importing from react-tinder-card module
import DatingCard from 'react-tinder-card'
import './Renting.css'


const Renting = () => {
    const [bikes, setBikes] = useState([
        {name:'Rand Bike', imgUrl:'https://media.istockphoto.com/photos/blue-modern-mens-mid-drive-motor-city-touring-or-trekking-e-bike-picture-id1338461762?b=1&k=20&m=1338461762&s=170667a&w=0&h=PU6Z7mtdp_sVaT0ySjlJWjN3SMkbdjGzk5YgYilNHQs='},
        {name:'Ride Moto',imgUrl:"https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"},
        {name:"Motor Ride", imgUrl:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"},
        {name:"Tomahauk", imgUrl:"https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"}

    ])
    const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    }

    const outOfFrame  = (name) => {
        console.log(name + "left the screen!!")
    }
    return (
        <div className='riding'>
            <div className='riding_container'>
                {bikes.map((bike) => (
                    <DatingCard
                      className = "swipe"
                      key = {bike.name}
                      preventSwipe = {['up','down']}
                      onSwipe = {(dir) => swiped(dir,bike.name)} 
                      onCardLeftScreen = {() => outOfFrame(bike.name)}  >
                    <div style={{backgroundImage:`url(${bike.imgUrl})`}}
                    className="card">
                        <h3>{bike.name}</h3>
                    </div>

                  
                    </DatingCard>
                ))}

            </div>

        </div>
    )
}
export default Renting