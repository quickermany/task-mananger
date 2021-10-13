const db = require("../models");
const Tasks = db.Tasks;
const Solutions = db.Solutions;
const Tags = db.Tags;
const Accounts = db.Accounts;
const Topics = db.Topics;
const AccountSolution = db.AccountSolution;


create = async (task) => {
    await Tasks.create(task, {include: {model: Solutions}});
    const data = await Accounts.findOne({where: {id: task.accountId}});
    await Accounts.update({createdTask: data.dataValues.createdTask + 1}, {where: {id: data.dataValues.id}});
};

findAll = async () => {
    return Tasks.findAll({
        attributes: ["title", "conditionTask"],
        include: [{

            model: Tags,
            attributes: ["tagText"],
            through: {
                attributes: [],
            }
        },
            {
                model: Solutions
            },
            {
                model: Accounts
            }]
    });
};

findByPk = async (id) => {
    return Tasks.findByPk(id, {
        attributes: ["title", "conditionTask"],
        include: [{
            model: Tags,
            attributes: ["tagText"],
            through: {
                attributes: [],
            }
        },
            {
                model: Solutions
            },
            {
                model: Accounts
            },
            {
                model: Topics,
            }]
    });
};

update = async (id, body) => {
    return Tasks.update(body, {where: {id: id}});
}

deleteAll = async (ids) => {
    Tasks.destroy({where: {id: ids}});
}


checkSolution = async (taskId, body) => {
    const taskSolution = await AccountSolution.findOne({where: {taskId: taskId, accountId: body.accountId}});
    if (taskSolution) {
        return true;
    } else {
        const allSolutions = await Solutions.findAll({where: {taskId: taskId}});
        const rightSolution = allSolutions.find(solution => solution.dataValues.textSolution === body.solution);
        if (rightSolution) {
            const account = await Accounts.findByPk(body.accountId);
            await Accounts.update({resolvedTask: account.dataValues.resolvedTask + 1}, {where: {id: body.accountId}});
            await AccountSolution.create({
                accountId: body.accountId,
                solutionId: rightSolution.dataValues.id,
                taskId: taskId
            });
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {
    create: create,
    findAll: findAll,
    findByPk: findByPk,
    update: update,
    deleteAll: deleteAll,
    checkSolution: checkSolution
}
