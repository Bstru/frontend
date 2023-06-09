export const projectService = {
    getProjects
}

const randomId = function (length = 6) {
    return Math.random().toString(36).substring(2, length + 2);
};


var projects =
    [
        {
            id: randomId(),
            name: 'Risk data analysis',
            dataSet: 'Kaggle risk analysis',

        },
        {
            id: randomId(),
            name: 'Twitter sentiment analysis ',
            dataSet: 'Twitter dataset',

        }
    ]

function getProjects() {
    return projects
}



