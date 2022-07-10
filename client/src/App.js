import './App.css';

const api = [
  {
    name: 'Deepak',
    course: 'BCA',
    session: '2019-2022',
  },
  {
    name: 'Aman',
    course: 'BCA',
    session: '2019-2022',
  },
  {
    name: 'Harsh',
    course: 'BCA',
    session: '2019-2022',
  },
]

function App() {
  return (
    <>
      {
        api.map((e, i) => {
          return <pre key={i}>{JSON.stringify(e)}</pre>
        })
      }
    </>
  );
}

export default App;
