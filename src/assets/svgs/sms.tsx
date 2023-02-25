type Sms = {
    color: string;
}

const Sms: React.FC<Sms> = ({ color }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6665 28.3333H9.33317C4.4665 28.3333 1.6665 25.5333 1.6665 20.6666V11.3333C1.6665 6.46663 4.4665 3.66663 9.33317 3.66663H22.6665C27.5332 3.66663 30.3332 6.46663 30.3332 11.3333V20.6666C30.3332 25.5333 27.5332 28.3333 22.6665 28.3333ZM9.33317 5.66663C5.51984 5.66663 3.6665 7.51996 3.6665 11.3333V20.6666C3.6665 24.48 5.51984 26.3333 9.33317 26.3333H22.6665C26.4798 26.3333 28.3332 24.48 28.3332 20.6666V11.3333C28.3332 7.51996 26.4798 5.66663 22.6665 5.66663H9.33317Z" fill={color} />
            <path d="M15.9999 17.16C14.8799 17.16 13.7465 16.8133 12.8799 16.1066L8.70653 12.7733C8.27987 12.4266 8.19987 11.8 8.54654 11.3733C8.8932 10.9466 9.51988 10.8666 9.94654 11.2133L14.1199 14.5466C15.1332 15.36 16.8532 15.36 17.8665 14.5466L22.0399 11.2133C22.4665 10.8666 23.1065 10.9333 23.4399 11.3733C23.7865 11.8 23.7199 12.44 23.2799 12.7733L19.1065 16.1066C18.2532 16.8133 17.1199 17.16 15.9999 17.16Z" fill={color} />
        </svg>
    )
}
export default Sms