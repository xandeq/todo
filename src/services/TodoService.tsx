import { Todo } from "../models/Todo";

const TODO_STORE = 'todos';

export const get = (): Todo[] => {
    const data = localStorage.getItem(TODO_STORE) || '';
    try {
        const result = JSON.parse(data) as Todo[];
        return result;

    } catch (error) {
        return []
    }
}