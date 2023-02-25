type FullScreen = {
    color: string;
}

const FullScreen: React.FC<FullScreen> = ({ color }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_279_4692" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                <rect width="32" height="32" fill={color} />
            </mask>
            <g mask="url(#mask0_279_4692)">
                <path d="M6.40002 25.5999V19.1999H8.80002V23.1999H12.8V25.5999H6.40002ZM6.40002 12.7999V6.3999H12.8V8.7999H8.80002V12.7999H6.40002ZM19.2 25.5999V23.1999H23.2V19.1999H25.6V25.5999H19.2ZM23.2 12.7999V8.7999H19.2V6.3999H25.6V12.7999H23.2Z" fill="#C6C6C6" />
            </g>
        </svg>
    )
}
export default FullScreen