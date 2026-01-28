
import {useState} from 'react';
import { Header } from '../src/components/Header';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import { CoreConcept } from './components/CoreConcept';
import TabButton  from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  // create a variable tap content

  const handleSelect = (selectedButton) => {
    // selectButton => components, JSX, Props or State
    // tabContent = selectedButton;
    // console.log(tabContent);
    /*
    The lines of code above does not execute again because
    Recat compnents execute only once. You have to tell it to
    execute again.
    */
    setSelectedTopic(selectedButton);
  }
  
  let tabContent = <p> Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
            <div id='tab-content'>
            <h3>
            {EXAMPLES[selectedTopic].title}
            </h3>
            <p> 
            {EXAMPLES[selectedTopic].description}
            </p>
            <pre> 
              <code> 
            {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )
  }
  return (
    <div>
      <Header/>
      <main>
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
        <section id="examples">
          <h2> Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}> Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}> JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}> Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() =>  handleSelect('state')}> State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
