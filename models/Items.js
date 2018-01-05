module.exports = function(sequelize, DataTypes){
	var Item = sequelize.define('Item',{
		item: DataTypes.STRING,
		price: DataTypes.STRING,
        num: DataTypes.STRING,
        importdate: DataTypes.DATE,
        duedate: DataTypes.DATE,
        promoteday: DataTypes.TIME
	});
	return Item;
};