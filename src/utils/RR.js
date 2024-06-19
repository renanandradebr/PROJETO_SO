// Função que checa a fila e atualiza ela
function queueUpdation(queue, _timer, _arrival, n, maxProccessIndex) {
  // inicializa um index e faz a procura
  let zeroIndex
  for (let i = 0; i < n; i++) {
    if (queue[i] == 0) {
      zeroIndex = i
      break
    }
  }
  queue[zeroIndex] = maxProccessIndex + 1
}

// Função auxiliar
function queueMaintainence(queue, n) {
  // Atualiza a fila
  for (let i = 0; i < n - 1 && queue[i + 1] != 0; i++) {
    let temp = queue[i]
    queue[i] = queue[i + 1]
    queue[i + 1] = temp
  }
}

// Função que checa cada processo novo
function checkNewArrival(timer, arrival, n, maxProccessIndex, queue) {
  if (timer <= arrival[n - 1]) {
    // Checa se outros processos estão disponíveis
    let newArrival = false
    for (let j = maxProccessIndex + 1; j < n; j++) {
      if (arrival[j] <= timer) {
        if (maxProccessIndex < j) {
          maxProccessIndex = j
          newArrival = true
        }
      }
    }
    //adds the incoming process to the ready queue
    //(if any arrives)
    if (newArrival) queueUpdation(queue, timer, arrival, n, maxProccessIndex)
  }
}

//Código inicial
let n = 4 // Tamanho do array de processos
let tq = 2 // Tempo Quanta, ou quantum é uma unidade de tempo do Sistema operacional
let timer = 0
let maxProccessIndex = 0
let avgWait = 0
let avgTT = 0
const wait = []
const turn = []
const queue = []
const temp_burst = []
const complete = []
const arrival = [0, 1, 2, 3]
const burst = [5, 4, 2, 1]

// Inicializa a variável temp_burst com os valores de tempo de execução dos processos
for (let i = 0; i < n; i++) {
  temp_burst[i] = burst[i]
}

for (let i = 0; i < n; i++) {
  //Inicia a fila com uma lista completa
  complete[i] = false
  queue[i] = 0
}
// Inicia o contador
while (timer < arrival[0])
  //Incrementa o relogio até o primeiro processo começar
  timer++
queue[0] = 1

// Inicia O algoritmo
while (true) {
  let flag = true // Variavel auxiliar
  for (let i = 0; i < n; i++) {
    if (temp_burst[i] != 0) {
      flag = false
      break
    }
  }
  if (flag) break

  // Calcula o tempo e atualiza os dados com base nos valores dados anteriormente
  for (let i = 0; i < n && queue[i] != 0; i++) {
    let ctr = 0 // Control, variavel auxiliar
    while (ctr < tq && temp_burst[queue[0] - 1] > 0) {
      temp_burst[queue[0] - 1] -= 1
      timer += 1
      ctr++

      // Checa e atualiza a fila até o ultimo processo
      checkNewArrival(timer, arrival, n, maxProccessIndex, queue)
    }
    // Se o processo for completado guarda, marca como completo e sai
    if (temp_burst[queue[0] - 1] == 0 && complete[queue[0] - 1] == false) {
      //turn array currently stores the completion time
      turn[queue[0] - 1] = timer
      complete[queue[0] - 1] = true
    }

    // Checa se a CPU está parada
    let idle = true
    if (queue[n - 1] == 0) {
      for (let i = 0; i < n && queue[i] != 0; i++) {
        if (complete[queue[i] - 1] == false) {
          idle = false
        }
      }
    } else idle = false

    if (idle) {
      timer++
      checkNewArrival(timer, arrival, n, maxProccessIndex, queue)
    }

    //Faz a manutenção da entrada de cada processo após cada entrada na fila
    queueMaintainence(queue, n)
  }
}

// Calcula o tempo de espera e o turn around time
for (let i = 0; i < n; i++) {
  turn[i] = turn[i] - arrival[i]
  wait[i] = turn[i] - burst[i]
}

// Gera os resultados no console
console.log(`Time Quanta : ${tq}`)
console.log(`Number of Processes : ${n}`)
console.log(`Arrival Time of Processes : ${arrival}`)
console.log(`Burst Time of Processes : ${burst}`)

// Gera a tabela com os resultados
console.log('\nProgram No.\tArrival Time\tBurst Time\tWait Time\tTurnAround Time\n')
for (let i = 0; i < n; i++) {
  console.log(`${i + 1}\t\t ${arrival[i]}\t\t ${burst[i]}\t\t ${wait[i]} \t\t ${turn[i]} \n`)
}
for (let i = 0; i < n; i++) {
  avgWait += wait[i]
  avgTT += turn[i]
}
// Gera a média final
console.log(`\nAverage wait time : ${avgWait / n}`)
console.log(`\nAverage Turn Around Time : ${avgTT / n}`)
