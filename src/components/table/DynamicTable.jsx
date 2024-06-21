import { useState } from 'react'

function DynamicTable({ type }) {
  const [rows, setRows] = useState([])
  const [newRow, setNewRow] = useState({ quantum: '', tempoChegada: '', tempoExecucao: '' })

  function handleInputChange(e) {
    const { name, value } = e.target
    setNewRow({
      ...newRow,
      [name]: value
    })
  }

  function handleAddRow() {
    setRows([...rows, newRow])
    setNewRow({ quantum: '', tempoChegada: '', tempoExecucao: '' })
  }

  function handleRemoveRow(index) {
    setRows(rows.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>{type}</h2>
      <table>
        <thead>
          <tr>
            <th>Quantum</th>
            <th>Tempo de Chegada</th>
            <th>Tempo de Execução</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.quantum}</td>
              <td>{row.tempoChegada}</td>
              <td>{row.tempoExecucao}</td>
              <td>
                <button onClick={() => handleRemoveRow(index)}>Remover</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="quantum"
                value={newRow.quantum}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="tempoChegada"
                value={newRow.tempoChegada}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="tempoExecucao"
                value={newRow.tempoExecucao}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button onClick={handleAddRow}>Adicionar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable
