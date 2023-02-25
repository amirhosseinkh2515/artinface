import ReactGa from "react-ga";

const sendGa = ((category, action, label, value) => {
    value ?
        ReactGa.event({
            category: category,
            action: action,
            transport: 'beacon',
            label: label,
            value: value
        })
        :
        ReactGa.event({
            category: category,
            action: action,
            transport: 'beacon',
            label: label,
        })
})
export default sendGa