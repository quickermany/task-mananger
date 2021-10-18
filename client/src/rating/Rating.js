import  React, { useState, useContext } from 'react'
import { FaStar } from "react-icons/fa"
import {Context} from "../context";
import {Col} from "react-bootstrap";



const Rating = () => {
    const [context, setContext] = useContext(Context);

    const stars = Array(5).fill(0)

    const [currentStars, setCurrentStars] = useState(0)
    const [changeStars, setChangeStars] = useState(undefined)

    const handleClick = (value) => {
        setCurrentStars(value)
    }

    const handleMouseOver = (value) => {
        setChangeStars(value)
    }

    const handleMouseLeave = () => {
        setChangeStars(undefined)
    }

    const colors = {
        orange: "#167c0c",
        grey: "#e7e4e4"
    }

    return (
        <div>
            {context?.logged ?
                (
                    <Col>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={18}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer",
                                        outlineColor: "darkgreen"
                                    }}
                                    color={(changeStars || currentStars) > index ? colors.orange : colors.grey}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => {
                                        handleClick(index + 1)
                                    }}
                                />
                            )
                        })}
                    </Col>
                )
                :
                (
                    <h4>rating</h4>
                )}
        </div>

    )
}

export default Rating