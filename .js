// script.js
const addGoalBtn = document.getElementById('add-goal');
const goalInput = document.getElementById('goal-input');
const daySelect = document.getElementById('day-select');
const goalsUl = document.getElementById('goals-ul');

let goals = [];

// Função para atualizar a lista
function renderGoals() {
    goalsUl.innerHTML = '';
    goals.forEach((goal, index) => {
        const li = document.createElement('li');
        li.textContent = `${goal.date} - ${goal.text}`;
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Excluir';
        delBtn.addEventListener('click', () => {
            goals.splice(index, 1);
            renderGoals();
        });

        li.appendChild(delBtn);
        goalsUl.appendChild(li);
    });
}

// Adicionar objetivo
addGoalBtn.addEventListener('click', () => {
    const date = daySelect.value;
    const text = goalInput.value.trim();

    if (!date || !text) {
        alert('Selecione um dia e digite um objetivo!');
        return;
    }

    goals.push({ date, text });
    goalInput.value = '';
    renderGoals();
});