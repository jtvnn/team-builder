import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const teamList = [
  { name: 'Jacob', email: 'jacob@jac.com', role: 'Backend Developer' },
  { name: 'Luke', email: 'lucas@luc.com', role: 'Frontend Developer' },
  { name: 'Devon', email: 'dev@devon.com', role: 'Backend Designer' },
]

const initialFormsValues = {
  name: '',
  email: '',
  role: '',
}

function Form() {
  const [team, setTeam] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormsValues)

  const change = evt => {
    const {name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = evt => {
    evt.preventDefault()
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role }
      setTeam([...team,  newTeam])
      setFormValues(initialFormsValues)
    }
    return (
      <div className='container'>
        <h1>Simple Form</h1>
    
    
    {
      team.map((team, idx) => {
        return <div key={idx}>{team.name} {team.email} {team.role}</div>
      })
    }
      <form onSubmit={submit}>
        <input name='name' type="text" value={formValues.name} onChange={change} />
        <input name='email' type="email" value={formValues.email} onChange={change} />
        <input name='role' type="text" value={formValues.role} onChange={change} />

        <button>submit</button>
      </form>
    </div>
      )
    }

ReactDOM.render(
  <React.StrictMode>
    <Form />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

