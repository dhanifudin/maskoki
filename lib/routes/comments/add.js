'use strict';

const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'post',
    path: '/recipes/{recipeId}/comments',
    options: {
        notes: 'Add comment into specific recipe, authentication needed.',
        tags: ['api'],
        auth: 'jwt',
        validate: {
            params: Joi.object({
                recipeId: Joi.string().required()
            }),
            payload: Joi.object({
                comment: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { recipeId } = request.params;
            const { payload } = request;
            const { commentService } = request.services();
            const currentUserId = Helpers.currentUserId(request);

            const task = async (txn) => {

                const response = await commentService.add({
                    recipe_id: recipeId,
                    user_id: currentUserId,
                    ...payload
                });
                return await commentService.read({ id: response.id }, txn);
            };

            return h.context.transaction(task);
        }
    }
});
