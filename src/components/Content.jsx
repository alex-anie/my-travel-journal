import Activities from "./Activities"

// Exter API resourses
import API from "../api"
import SideNavbar from "./SideNavbar";

export default function Content(){

      const apiObject = API.map(function (item) {
        return (
            <Activities
                key={item.id}
                {...item}
            />
            );
      });

    return (
      <>
        <main className="content-main">
          <section className="content-section">
            {/* <Activities  /> */}
            {apiObject}
          </section>
        </main>
        <section>
          <SideNavbar />
        </section>
      </>
    );
}