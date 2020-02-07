
const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};


const success = (request, response, body) => {
  const responseJSON = {
    message: 'This is a successful response',
    id: 'success',
  };
  console.log('hey', body);

  return respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, params) => {
  const responseJSON = {
    message: 'This request has the required parameters',
    id: 'badRequest',
  };
  let status = 400;

  if (!params.valid || !params.vald === 'true') {
    responseJSON.message = 'Missing valid query parameter set to true';
    status = 200;
  }

  return respondJSON(request, response, status, responseJSON);
};

const unauthorized = (request, response, params) => {
  let status = 401;
  const responseJSON = {
    message: 'Missing loggedIn query parameter set to yes',
    id: 'unauthorized',
  };

  if (params.loggedIn || params.loggedIn === 'true') {
    responseJSON.message = 'This request has the required parameters';
    status = 200;
  }

  return respondJSON(request, response, status, responseJSON);
};

const forbidden = (request, response) => {
  const responseJSON = {
    message: 'You do not have access to this content',
    id: 'forbidden',
  };

  return respondJSON(request, response, 401, responseJSON);
};

const internalError = (request, response) => {
  const responseJSON = {
    message: 'Internal Server Error. Something went wrong.',
    id: 'internalError',
  };

  return respondJSON(request, response, 500, responseJSON);
};

const notImplemented = (request, response) => {
  const responseJSON = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content',
    id: 'notImplemented',
  };

  return respondJSON(request, response, 501, responseJSON);
};


const notFound = (request, response) => {
  const responseJSON = {
    message: 'Page you are looking for was not found',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, responseJSON);
};


module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internalError,
  notImplemented,
  notFound,
};