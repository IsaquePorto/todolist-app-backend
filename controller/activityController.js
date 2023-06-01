const Activity = require('../data/activity')
const baseURL = '/todolist'

module.exports = (router) => {

    router.get(baseURL, async (req, res) => {

        const activities = await Activity.findAll();
        return res.json(activities);
    })

    router.get(baseURL + '/:id', async (req, res) => {
        const id = req.params.id

        const activity = await Activity.findByPk(id);
        res.json(activity);
    })

    router.post(baseURL, async (req, res) => {
        const result = await Activity.create(req.body)
            .then((item) => {
                return res.json(item.dataValues)
            })
            .catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: "ERRO: Usuário não cadastrado com Sucesso.",
                    item: req.body
                })
            })
    })

    router.put(baseURL + '/:id', async (req, res) => {

        const id = req.params.id

        await Activity.update({
            nome: req.body.nome,
            done: req.body.done
        }, {
            where: {
                id: id
            }
        })
            .then(() => {
                return res.send('Alterado!')
            })
    })

    router.delete(baseURL + '/:id', async (req, res) => {

        const id = req.params.id

        await Activity.destroy({
            where: {
                id: id
            }
        })
            .then(() => {
                return res.send('Deletado!')
            })
            .catch(() => {
                return res.status(400).send('Activity não encontrada.')
            })
    })
}