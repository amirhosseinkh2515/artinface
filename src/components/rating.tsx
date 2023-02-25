import React from 'react'
import StarFull from '../assets/svgs/starFull'

type Rating = {
    value:any;
}

const Rating: React.FC<Rating>= ({ value }) => {
    const getStar = (value:any) => {
        switch (value) {
            case 0:
                return <StarFull />;
            case 50:
                return <StarFull />;
            case 100:
                return <StarFull />
        }
    }
    const getStars = (value:any) => {
        const stars = [];
        const [whole, part] = parseFloat(value).toString().split(".");
        for (let i:any = 0; i < whole; i++) stars.push(100)
        if (part) stars.push(50)
        for (let i:any = whole; i < (part ? 4 : 5); i++) stars.push(0)
        return stars
    }

    return (
        <div className="flex">
            {getStars(value).map((item,i) => (
                getStar(item)
            ))}
        </div>
    )
}

export default Rating
