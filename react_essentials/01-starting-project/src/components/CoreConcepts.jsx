import {CoreConcept}  from "../components/CoreConcept";
import { CORE_CONCEPTS } from "../data";

 function CoreConcepts() {
    return (
        <section id='core-concepts'>
          <h2> Core Concepts</h2>
          <ul>
          {
            CORE_CONCEPTS.map((item) => 
                <CoreConcept
                key={item.title}
                title={item.title}
                description={item.description}
                img={item.image} />
            )
            }
            </ul>
        </section>
    );
}

export default CoreConcepts;