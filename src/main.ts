import './style.css'

document.querySelector<HTMLDivElement>('.container')!.innerHTML = `
<div class="display">0</div>
<div class="panelButtons">
    <button class="operation" id="bright-grey">AC</button>
    <button class="operation" id="bright-grey">&#177;</button>
    <button class="operation" id="bright-grey">%</button>
    <button class="operation" id="orange">÷</button>
    <button class="number" id="grey">7</button>
    <button class="number" id="grey">8</button>
    <button class="number" id="grey">9</button>
    <button class="operation" id="orange">×</button>
    <button class="number" id="grey">4</button>
    <button class="number" id="grey">5</button>
    <button class="number" id="grey">6</button>
    <button class="operation" id="orange">−</button>
    <button class="number" id="grey">1</button>
    <button class="number" id="grey">2</button>
    <button class="number" id="grey">3</button>
    <button class="operation" id="orange">+</button>
    <button class="number" id="grey">0</button>
    <button id="grey">,</button>
    <button class="operation" id="orange">=</button>
</div>
`