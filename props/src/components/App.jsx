import 'bootstrap/dist/css/bootstrap.min.css';

import Quote from './Quote';
import Box from './Box';

const quotes = [
  {
    id: 'q1',
    text: 'This is my quote',
    person: 'Ehsan',
    source: 'React Crash Course',
  },
  {
    id: 'q2',
    text: "Frankly, my dear, I don't give a damn",
    person: 'Clark Gable',
    source: 'Gone with the Wind',
  },
  {
    id: 'q3',
    text: 'Show me the money!',
    person: 'Cuba Gooding Jr.',
    source: 'Jerry Maguire',
  },
];

function App() {
  return (
    <div className="container mt-5">
      {/* {quotes.map((quote) => (
        <Quote
          text={quote.text}
          person={quote.person}
          source={quote.source}
          key={quote.id}
        />
      ))} */}
      <Box>
        <Quote text="This is my quote!" person="Ehsan" source="React Course" />
      </Box>
    </div>
  );
}

export default App;
