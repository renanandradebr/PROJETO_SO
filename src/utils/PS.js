// Cria a classe processo
class Process {
  constructor(pid, bt, priority) {
    this.pid = pid // ID do Processo
    this.bt = bt // (Burst Time)Tempo de execução da CPU
    this.priority = priority // Prioridade do processo
  }

  //Metodo que retorna prioridade
  prior() {
    return this.priority
  }
}

class GFG {
  // Função que vai achar o tempo de espera de todos os processos
  findWaitingTime(proc, n, wt) {
    // tempo de espera (Waiting Time) do primeiro processo é 0
    wt[0] = 0
    // calcula o tempo de espera
    for (let i = 1; i < n; i++) {
      wt[i] = proc[i - 1].bt + wt[i - 1]
    }
  }

  // Função que vai calcular o tempo transcorrido
  findTurnAroundTime(proc, n, wt, tat) {
    // Calcula o tempo transcorrido apartir do Burst Time e do Waiting time
    for (let i = 0; i < n; i++) {
      tat[i] = proc[i].bt + wt[i]
    }
  }

  // Função que calcula a média do tempo gasto
  findavgTime(proc, n) {
    let wt = new Array(n) // Cria um novo array de waiting time
    let tat = new Array(n) // Cria um novo array de turn around time
    let total_wt = 0
    let total_tat = 0
    // Função que acha o tempo de espera de todos os processos
    this.findWaitingTime(proc, n, wt)

    // Função que acha o tempo transcorrido de todos os processos
    this.findTurnAroundTime(proc, n, wt, tat)

    // Primeira fileira com os processos e os detalhes
    console.log('Processes Burst time Waiting time Turn around time')

    // Calcula o tempo total de espera e do tempo transcorrido
    for (let i = 0; i < n; i++) {
      total_wt = total_wt + wt[i]
      total_tat = total_tat + tat[i]
      console.log(' ' + proc[i].pid + '\t\t' + proc[i].bt + '\t ' + wt[i] + '\t\t ' + tat[i])
    }
    // Mostra a média do tempo de espera e do tempo transcorrido
    console.log('Average waiting time = ' + total_wt / n)
    console.log('Average turn around time = ' + total_tat / n)
  }

  priorityScheduling(proc, n) {
    // Organiza os processos por prioridade
    proc.sort((a, b) => b.prior() - a.prior())
    console.log('Order in which processes get executed:')
    for (let i = 0; i < n; i++) {
      console.log(proc[i].pid + ' ')
    }

    // Encontra a média do tempo
    this.findavgTime(proc, n)
  }
}

// Codigo inicial
// Objeto
let ob = new GFG()
// Tamanho do array de processos
let n = 3
let proc = []
proc[0] = new Process(1, 10, 2)
proc[1] = new Process(2, 5, 0)
proc[2] = new Process(3, 8, 1)
ob.priorityScheduling(proc, n)
