var User = require('../model/User');
const UserService = () => {

	let create = (user, callback) => {
		User.insert(user, callback);
	}

	let update = (id, user, callback) => {
		User.updateOne({_id: new ObjectId(id)}, user, callback);
	}

	let findAll = (callback) => {
		User.find({}).toArray(callback);
	}

	let find = (user, callback) => {
		User.find(user).toArray(callback);
	}

	let remove = (id, callback) => {
		User.deleteOne({_id: new ObjectId(id)}, callback);
	}

	return {
		delete: remove,
		find: find,
		findAll: findAll,
		update: update,
		create: create
	}
}

module.exports = UserService;