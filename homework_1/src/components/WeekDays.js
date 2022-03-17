import React, { useState } from 'react'
import Buttons from "./Button"


const WeekDays = ({ days }) => {


    return (
        <>
            <div>
                <Buttons days={days}/>
            </div>
        </>
    )
}

export default WeekDays