import { apiHandler, usersRepo, omit } from 'helpers/api';

export default apiHandler({
    get: getUsers
});

async function getUsers(req, res) {
    // return users without hashed passwords in the response
    let response = await usersRepo.getAll();
	console.log('response', response);

	 response = response.map(e => omit(e, 'hash'));
	console.log('response', response);
    return res.status(200).json(response);
}
