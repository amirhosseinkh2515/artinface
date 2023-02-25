type Linkedin = {
    color: string;
}

const Linkedin: React.FC<Linkedin> = ({ color }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.86225C3 3.83363 3.85475 3 4.90937 3H27.0906C28.1453 3 29 3.83363 29 4.86225V27.1378C29 28.1664 28.1453 29 27.0906 29H4.90937C3.85475 29 3 28.1664 3 27.1378V4.86225ZM11.0324 24.7652V13.0246H7.13075V24.7652H11.0324ZM9.08238 11.4208C10.4425 11.4208 11.2891 10.5205 11.2891 9.39275C11.2647 8.24062 10.4441 7.36475 9.10838 7.36475C7.77262 7.36475 6.9 8.24225 6.9 9.39275C6.9 10.5205 7.74662 11.4208 9.05638 11.4208H9.08238ZM17.0579 24.7652V18.2084C17.0579 17.8574 17.0839 17.5064 17.1879 17.2561C17.469 16.5557 18.1109 15.8294 19.1899 15.8294C20.602 15.8294 21.1659 16.9051 21.1659 18.4846V24.7652H25.0675V18.0312C25.0675 14.4237 23.1435 12.7467 20.576 12.7467C18.5057 12.7467 17.5779 13.8842 17.0579 14.6854V14.726H17.0319C17.0405 14.7124 17.0492 14.6989 17.0579 14.6854V13.0246H13.1579C13.2066 14.1264 13.1579 24.7652 13.1579 24.7652H17.0579Z" fill={color} />
        </svg>

    )
}
export default Linkedin