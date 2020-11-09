const $colors = document.getElementById('colors')

const html = []

for (const color in colors) {
    html.push(`<div
                class="color"
                data-name="${color}"
                data-code="${colors[color]}"
                data-display="name"
                style="background-color: ${color}">${color}</div>`)
}

$colors.innerHTML = html.join('')

const $swatches = document.querySelectorAll('.color')

function handler (e) {
    if (e.target.dataset.display === 'name') {
        e.target.dataset.display = 'code'
        e.target.textContent = e.target.dataset.code
    }

    else {
         e.target.dataset.display = 'name'
         e.target.textContent = e.target.dataset.name
    }  
}

for (const swatch of $swatches) {
    swatch.addEventListener('click', handler)
}
