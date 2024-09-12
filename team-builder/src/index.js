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
        <label>Name: 
          {
            <input 
            name='name' 
            type="text" 
            value={formValues.name} 
            onChange={change}
            placeholder='type a name'
            maxLength='30' 
            />
          }
        </label>

        <label>Email: 
        <input 
        name='email' 
        type="email" 
        value={formValues.email} 
        onChange={change} 
        placeholder='type an email'
        maxLength='30'
        />
        </label>
        
        <label>Role:
        <select name='role' value={formValues.role} onChange={change}>
            <option value=''>--select role --</option>
            <option value='backend_developer'>Backend Developer</option>
            <option value='frontend_developer'>Frontend Developer</option>
            <option value='frontend_designer'>Frontend Designer</option>
        </select>
        </label>

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

