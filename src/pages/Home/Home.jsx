import { useState } from 'react'
import './Home.css'
import Checkbox from '../../components/checkbutton/checkbutton'
import Table from '../../components/table/Table'

function Home() {
  const [roundRobin, setRoundRobin] = useState(false) // Atualiza o estado da variavel roundRobin
  const [priority, setPriority] = useState(false) // Atualiza o estado da variavel  priority
  const [priority2, setPriority2] = useState(false) // Atualiza o estado da variavel  priority2

  function handleCheckboxChangeRR() {
    if (!priority && !priority2) setRoundRobin(!roundRobin)
  }

  function handleCheckboxChangePriority() {
    if (!roundRobin && !priority2) setPriority(!priority)
  }

  function handleCheckboxChangePriorityPreemptive() {
    if (!roundRobin && !priority) setPriority2(!priority2)
  }

  return (
    <>
      <main>
        <header>
          <h1>Visualizador de Algoritmo de Escalonamento de CPU</h1>
        </header>
        <section>
          <Checkbox
            type={'Round Robin'}
            isChecked={roundRobin}
            handleCheckboxChange={handleCheckboxChangeRR}
          />
          <Checkbox
            type={'Prioridade Não Preemptivo'}
            isChecked={priority}
            handleCheckboxChange={handleCheckboxChangePriority}
          />
          <Checkbox
            type={'Prioridade Preemptivo'}
            isChecked={priority2}
            handleCheckboxChange={handleCheckboxChangePriorityPreemptive}
          />
        </section>
        <article>
          {roundRobin ? (
            <Table type={'Round Robin'}></Table>
          ) : priority ? (
            <Table type={'Prioridade Não Preemptivo'}></Table>
          ) : priority2 ? (
            <Table type={'Prioridade Preemptivo'}></Table>
          ) : (
            <h2>Escolha uma opção</h2>
          )}
        </article>
      </main>
    </>
  )
}

export default Home
