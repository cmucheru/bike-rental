import React, {useState, useEffect} from 'react'
//importing from react-tinder-card module
import DatingCard from 'react-tinder-card'
import './Renting.css'
import axios from 'axios'


const Renting = () => {
    const [bikes, setBikes] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const req = await axios.get("/riding/cards")
            setBikes(req.data)
        }
        fetchData()
    }, [])


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