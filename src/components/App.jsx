import '../css/App.css';
import React, {useState, useEffect} from 'react';
import Advice from "./Advice.jsx"
import axios from "axios";

const api_url = "https://api.adviceslip.com/advice"

function App() {
  // ------------------ Fetching Data ------------------
  const [advice, setAdvice] = useState([])
  const [error, setError] = useState(null)
  useEffect( () => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    const res = await axios.get (api_url).catch(error => {setError(error)})
    setAdvice(res.data.slip)
    //   axios.get(api_url).then((res) => {
    //     const advices = res.data.slip
    //     setAdvice(advices)
    //   }).catch(err  => console.err("Error: " + err));
  }

  function NextAdvice(e) {
      e.target.setAttribute('disabled', true)
      getAdvice();
      e.target.setAttribute('disabled', false)
  }
  
  // handle error or no post
  if (error) return setAdvice({id: "###", advice:`Error: ${error}`});
  if (!advice) return setAdvice({id: null, advice:"No advice found"});
  // ------------------ Fetching Data ------------------
  return (
    <main>
      <Advice 
        key={advice.id}
        id={advice.id}
        advice={advice.advice}
        NextAdvice={NextAdvice}
      />
    </main>
  );
};

export default App;
