'use strict';

const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/comments/{id}',
    options: {
        notes: 'Get specific comment by id',
        tags: ['api'],
        validate: {
            params: Joi.object({
                id: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { id } = request.params;
            const { commentService } = request.services();

            const comment = commentService.read({ id });
            if (!comment) {
                throw Boom.notFound();
            }

            return comment;
        }
    }
});
