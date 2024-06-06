export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const DELETE_TASK = 'DELETE_TASK'


/**
 * Action pour ajouter une nouvelle tâche.
 * @param {string} description - La description de la tâche.
 */
export const addTask = (description) => ({
    type: ADD_TASK,
    payload: { id: Date.now(), description, isDone: false }
});

/**
 * Action pour basculer l'état d'une tâche (fait/pas fait).
 * @param {number} id - L'identifiant de la tâche.
 */
export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id
});

/**
 * Action pour supprimer une tâche.
 * @param {number} id - L'identifiant de la tâche.
 */
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
});
