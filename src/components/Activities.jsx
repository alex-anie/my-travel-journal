import loca from "../assets/loca.svg"

export default function Activities(props){

  const str = props.title.replace(/\s/g, "");
  
    return (
      <div>
        <section>
          <aside className="img-VS-content">
            <div>
              <img src={props.imageUrl} alt="" className="image" />
            </div>

            <div className="aside-content">
              <div className="places">
                <img src={loca} alt="" />
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
              </div>
              <h1 className="visits">
                <a href={`#${str}`}>{props.title}</a>
              </h1>
              <h4 className="dates" id={`${str}`}>
                {props.startDate} - {props.endDate} 
              </h4>
              <p className="description">{props.description}</p>
            </div>
          </aside>
          <hr style={{ width: 471, color: "gray", margin: "1em 2em" }} />
        </section>
      </div>
    );
}