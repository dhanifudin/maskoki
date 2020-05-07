'use strict';

const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');
const { Model } = require('./helpers');

module.exports = class Comment extends Schwifty.Model {

    static get tableName() {

        return 'comments';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            user_id: Joi.number().integer().greater(0).required(),
            recipe_id: Joi.number().integer().greater(0).required(),
            comment: Joi.string().required()
        });
    }

    static get relationMappings() {

        const User = require('./user');

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'comments.user_id',
                    to: 'users.id'
                }
            }
        };
    }
};
