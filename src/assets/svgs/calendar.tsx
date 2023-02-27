type Calendar = {
    color: string;
}

const Calendar: React.FC<Calendar> = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_508_1997" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill={color} />
            </mask>
            <g mask="url(#mask0_508_1997)">
                <path d="M11.1 14.4004V12.6004H12.9V14.4004H11.1ZM7.19998 14.4004V12.6004H8.99998V14.4004H7.19998ZM15 14.4004V12.6004H16.8V14.4004H15ZM11.1 18.0004V16.2004H12.9V18.0004H11.1ZM7.19998 18.0004V16.2004H8.99998V18.0004H7.19998ZM15 18.0004V16.2004H16.8V18.0004H15ZM3.59998 21.6004V4.80039H7.19998V2.40039H8.99998V4.80039H15V2.40039H16.8V4.80039H20.4V21.6004H3.59998ZM5.39998 19.8004H18.6V10.8004H5.39998V19.8004ZM5.39998 9.00039H18.6V6.60039H5.39998V9.00039Z" fill={color} />
            </g>
        </svg>
    )
}
export default Calendar