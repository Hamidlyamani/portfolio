

function TechBox({ imgPath, nameTech = "", index }) {
    return (
        <div className={`box-tech item${index + 1} ${nameTech == "" ? "withoutName" : ""}`} >
            <div className="img-tech">
                <img src={imgPath} alt={nameTech || "technology logo"} />
            </div>
            {nameTech !== "" ? (<div className="name-tech">{nameTech}</div>) : ""}
        </div>
    )
}

export default TechBox
