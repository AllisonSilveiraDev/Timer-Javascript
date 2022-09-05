function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  const relogio = document.querySelector('.relogio')
  let segundos = 0
  let timer

  function startTimer() {
    timer = setInterval(function () {
      segundos++
      relogio.innerHTML = getTimeFromSeconds(segundos)
    }, 1000)
  }

  document.addEventListener('click', function (e) {
    const element = e.target

    if (element.classList.contains('iniciar')) {
      relogio.classList.remove('pause')
      clearInterval(timer)
      startTimer()
    }

    if (element.classList.contains('pausar')) {
      relogio.classList.add('pause')
      clearInterval(timer)
    }

    if (element.classList.contains('zerar')) {
      relogio.classList.remove('pause')
      clearInterval(timer)
      relogio.innerHTML = '00:00:00'
      segundos = 0
    }
  })
}

relogio()
