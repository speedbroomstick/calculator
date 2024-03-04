(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();document.querySelector(".container").innerHTML=`
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
`;
