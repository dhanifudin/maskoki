'use strict';

const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'put',
    path: '/recipes/{recipeId}/comments/{id}',
    options: {
        notes: 'Update specific comment by id, authentication is needed',
        tags: ['api'],
        auth: 'jwt',
        validate: {
            params: Joi.object({
                recipeId: Joi.string().required(),
                id: Joi.string().required()
            }),
            payload: Joi.object({
                comment: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { id } = request.params;
            const { comment } = request.payload;
            const { commentService } = request.services();
            const currentUserId = Helpers.currentUserId(request);

            const record = await commentService.read({ id });

            if (currentUserId !== record.user_id) {
                throw Boom.forbidden();
            }

            const task = async (txn) => {

                await commentService.edit(id, { comment }, txn);
                return await commentService.read({ id }, txn);
            };

            return h.context.transaction(task);
        }
    }
});
