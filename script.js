const container=document.getElementById('container');
const colors= ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const SQUARES=1860;

for (let i = 0; i < SQUARES; i++) {
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColors(square));

    square.addEventListener('mouseout', () => removeColors(square));


    container.appendChild(square);
} 

function setColors(element)
{
 const color=getRandomColor();
 element.style.background=color;
 element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColors(element)
{
    element.style.background='#1d1d1d';
    element.style.boxShadow='0 0 2px #000'

}

function getRandomColor()
{
    return colors[Math.floor(Math.random() * colors.length)];
}