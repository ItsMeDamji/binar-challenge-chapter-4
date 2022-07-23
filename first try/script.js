const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}

const optionBtn = document.querySelectorAll(".player-side button");
optionBtn.addEventListener("click", () => {
    optionBtn.classList.add("changeBackgroundColor");
})