
import {useState} from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';

export default function Examples() {
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
      <Section id="examples">
          <h2> Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}> Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}> JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}> Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() =>  handleSelect('state')}> State</TabButton>
          </menu>
          {tabContent}
        </Section>  
    );
}