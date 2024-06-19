const data1 = [
  // Valores do Round Robin
  { ID: '1', ArrivalTime: 19, BurstTime: 5, WaitTime: 7, TurnAround: 12 },
  { ID: '2', ArrivalTime: 19, BurstTime: 4, WaitTime: 6, TurnAround: 10 },
  { ID: '3', ArrivalTime: 25, BurstTime: 2, WaitTime: 2, TurnAround: 4 },
  { ID: '4', ArrivalTime: 25, BurstTime: 1, WaitTime: 5, TurnAround: 6 }
]

const data2 = [
  // Valores do Algoritmo por Prioridade
  { ID: '1', ArrivalTime: 0, BurstTime: 10, WaitTime: 0, TurnAround: 10 },
  { ID: '3', ArrivalTime: 0, BurstTime: 8, WaitTime: 10, TurnAround: 18 },
  { ID: '2', ArrivalTime: 0, BurstTime: 5, WaitTime: 18, TurnAround: 23 }
]

const data3 = [
  // Valores do Algoritmo por Prioridade Preemptivo
  { ID: '1', ArrivalTime: 1, BurstTime: 3, WaitTime: 0, TurnAround: 0 },
  { ID: '2', ArrivalTime: 5, BurstTime: 8, WaitTime: 3, TurnAround: 3 },
  { ID: '3', ArrivalTime: 4, BurstTime: 2, WaitTime: 1, TurnAround: 1 },
  { ID: '4', ArrivalTime: 10, BurstTime: 13, WaitTime: 6, TurnAround: 6 },
  { ID: '5', ArrivalTime: 17, BurstTime: 16, WaitTime: 12, TurnAround: 12 }
]

function Table({ type }) {
  return (
    <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>Arrival Time</th>
          <th>Burst Time</th>
          <th>Wait Time</th>
          <th>Turn Around Time</th>
        </tr>
        {type === 'Round Robin'
          ? data1.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.ID}</td>
                  <td>{val.ArrivalTime}</td>
                  <td>{val.BurstTime}</td>
                  <td>{val.WaitTime}</td>
                  <td>{val.TurnAround}</td>
                </tr>
              )
            })
          : type === 'Prioridade Não Preemptivo'
          ? data2.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.ID}</td>
                  <td>{val.ArrivalTime}</td>
                  <td>{val.BurstTime}</td>
                  <td>{val.WaitTime}</td>
                  <td>{val.TurnAround}</td>
                </tr>
              )
            })
          : data3.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.ID}</td>
                  <td>{val.ArrivalTime}</td>
                  <td>{val.BurstTime}</td>
                  <td>{val.WaitTime}</td>
                  <td>{val.TurnAround}</td>
                </tr>
              )
            })}
      </table>
    </div>
  )
}

export default Table
