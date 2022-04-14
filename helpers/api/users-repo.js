import client from 'lib/db';

export const usersRepo = {
	getAll,
	getById,
	find,
	create,
	update,
	delete: _delete
};

function getAll() {
	return new Promise(async (resolve, reject) => {
		console.log("Retrieving Users from DB...");
		await client.connect();
		const result = await client.query({text:"SELECT * FROM users;"});
		return resolve(result.rows);
	});
}

async function getById(alias) {
	try {
		console.log("Retrieving Users from DB...");
		const query = `SELECT * FROM users WHERE alias = '${alias}';`;
		const user = await conn.query(query);
		console.log('user', user);
		return user;
	}
	catch (error) {
		console.log(error);
	}
}


async function find(id) {
}


function create(user) {
    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();

}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}