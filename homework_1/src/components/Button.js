import React,{useState} from 'react'

const Button = ({days }) => {
    const [day, setDay] = useState("კვირის დღეები")

    return (
        <div>
            {days.map((el, i) => (
                <button
                    onClick={(e) => setDay(e.currentTarget.value)}
                    key={i + 1}
                    value={el.day}>
                    {i + 1}
                </button>
            ))}
            {day}
        </div>
    )
}

export default Button