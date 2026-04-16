const router = require('express').Router()

const recipes = require('../../../data/recipes.json')

router.get('', (request, response) => {
    response.json(recipes)
})

router.post('/recipe/add', (request, response) => {
    const id = recipes.length + 1
    const finalRecipe = { id, ...request.body }
    recipes.push(finalRecipe)
    response.send(finalRecipe)
})

router.get('/recipe/:id', (request, response) => {
    const { id } = request.params
    const found = recipes.find(p => p.id.toString() === id)
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find recipe with id: ${id}` }})
})

module.exports = router
