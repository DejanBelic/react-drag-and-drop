const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Cook diner'},
        'task-2': { id: 'task-1', content: 'Walk with mici' },
        'task-3': { id: 'task-1', content: 'Prepare coffee' },
        'task-4': { id: 'task-1', content: 'Listen music' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1','task-2','task-3','task-4']
        },
    },
    columnOrder: ['column-1']
};

export default initialData;