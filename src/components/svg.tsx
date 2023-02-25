

const Svg = ({width,data}:{width:any,data:any}) => {
    const harchi = [data["left_eye"], data["right_eye"], data["right_cheek"], data["left_cheek"], data["mouth"], data["mental"], data["right_mandibular"], data["left_mandibular"], data["forehead"]]

    const mac = (svg: any) => {
        let element: any = ""
        for (let index = 0; index < svg.length; index++) {
            element = element += " " + svg[index]
            console.log(element, "item342")
        }
        return (
            <polygon points={element} style={{ strokeWidth: "1", stroke: "purple", fill: "transparent" }} />
        )
    }
    return (
        <svg height={width} width={width} >
            {harchi.map((svg) => mac(svg))}
        </svg>

    )
}

export default Svg