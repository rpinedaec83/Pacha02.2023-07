'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class participacions extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			participacions.associate = function(models) {
				// associations can be defined here
				participacions.belongsTo(models.usuarios,
					{
						as: 'usuarios',
						foreignKey: 'jugador_id',
					}
				);
				participacions.belongsTo(models.juegos,
					{
						as: 'juegos',
						foreignKey: 'juego_id',
					}
				);
			};
		}
	};
	participacions.init({
		jugador_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		juego_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		status: {
			allowNull: false,
			type: DataTypes.CHAR
		}
	}, {
		sequelize,
		modelName: 'participacions',
	});
	return participacions;
};