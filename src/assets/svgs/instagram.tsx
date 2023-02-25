type Instagram = {
    color: string;
}

const Instagram: React.FC<Instagram> = ({ color }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3998 2.66663H21.5998C25.8665 2.66663 29.3332 6.13329 29.3332 10.4V21.6C29.3332 23.651 28.5184 25.618 27.0681 27.0683C25.6178 28.5185 23.6508 29.3333 21.5998 29.3333H10.3998C6.13317 29.3333 2.6665 25.8666 2.6665 21.6V10.4C2.6665 8.34895 3.48126 6.38195 4.93155 4.93167C6.38183 3.48139 8.34883 2.66663 10.3998 2.66663ZM10.1332 5.33329C8.86013 5.33329 7.63923 5.83901 6.73906 6.73918C5.83888 7.63936 5.33317 8.86025 5.33317 10.1333V21.8666C5.33317 24.52 7.47984 26.6666 10.1332 26.6666H21.8665C23.1395 26.6666 24.3604 26.1609 25.2606 25.2607C26.1608 24.3606 26.6665 23.1397 26.6665 21.8666V10.1333C26.6665 7.47996 24.5198 5.33329 21.8665 5.33329H10.1332ZM22.9998 7.33329C23.4419 7.33329 23.8658 7.50889 24.1784 7.82145C24.4909 8.13401 24.6665 8.55793 24.6665 8.99996C24.6665 9.44199 24.4909 9.86591 24.1784 10.1785C23.8658 10.491 23.4419 10.6666 22.9998 10.6666C22.5578 10.6666 22.1339 10.491 21.8213 10.1785C21.5088 9.86591 21.3332 9.44199 21.3332 8.99996C21.3332 8.55793 21.5088 8.13401 21.8213 7.82145C22.1339 7.50889 22.5578 7.33329 22.9998 7.33329ZM15.9998 9.33329C17.7679 9.33329 19.4636 10.0357 20.7139 11.2859C21.9641 12.5362 22.6665 14.2318 22.6665 16C22.6665 17.7681 21.9641 19.4638 20.7139 20.714C19.4636 21.9642 17.7679 22.6666 15.9998 22.6666C14.2317 22.6666 12.536 21.9642 11.2858 20.714C10.0355 19.4638 9.33317 17.7681 9.33317 16C9.33317 14.2318 10.0355 12.5362 11.2858 11.2859C12.536 10.0357 14.2317 9.33329 15.9998 9.33329ZM15.9998 12C14.939 12 13.9216 12.4214 13.1714 13.1715C12.4213 13.9217 11.9998 14.9391 11.9998 16C11.9998 17.0608 12.4213 18.0782 13.1714 18.8284C13.9216 19.5785 14.939 20 15.9998 20C17.0607 20 18.0781 19.5785 18.8283 18.8284C19.5784 18.0782 19.9998 17.0608 19.9998 16C19.9998 14.9391 19.5784 13.9217 18.8283 13.1715C18.0781 12.4214 17.0607 12 15.9998 12Z" fill={color} />
        </svg>
    )
}
export default Instagram