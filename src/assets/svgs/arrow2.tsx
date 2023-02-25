type Arrow = {
    color: string;
    className?:string
    width?:string
    height?:string
}

const Arrow: React.FC<Arrow> = ({ color, className, width=20, height=20 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M17.2248 7.50001C17.2248 7.65834 17.1664 7.81667 17.0414 7.94167L11.6081 13.375C10.7248 14.2583 9.27477 14.2583 8.39144 13.375L2.95811 7.94167C2.71644 7.70001 2.71644 7.30001 2.95811 7.05834C3.19977 6.81667 3.59977 6.81667 3.84144 7.05834L9.27477 12.4917C9.67477 12.8917 10.3248 12.8917 10.7248 12.4917L16.1581 7.05834C16.3998 6.81667 16.7998 6.81667 17.0414 7.05834C17.1581 7.18334 17.2248 7.34167 17.2248 7.50001Z" fill={color} />
        </svg>
    )
}
export default Arrow
