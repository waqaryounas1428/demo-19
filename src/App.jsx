import { useEffect, useState } from 'react'
import { Data } from './CRUD/Employee.jsx'
function App() {
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    setEmployee(Data)
  }, []);

  const handleDelete = (id) => {
    alert(id);
  }

  const handleEdit = (id) => {
    alert(id);
  }

  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>id</th>
          <th>name</th>
          <th>lastName</th>
          <th>age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>
              <button className='btn btn-sm btn-primary' onClick={() => handleEdit(item.id)}>
                Edit
              </button>
              <button className='btn btn-sm btn-danger' onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App