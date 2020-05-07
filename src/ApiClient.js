class ApiClient {

  static get(url) {
    return fetch(url, {
      method: 'GET',
      headers: headers()
    }).then(respHandler(true, url));
  }

  static post(url, body, options={}) {
    return fetch(url, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
      headers: headers()
    }).then(respHandler(options.throwAllErrors, url));
  }
}

function headers() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

function respHandler(throwAllErrors, url) {
  return async (resp) => {
    const text = await resp.text();

    if (!resp.ok) {

      if(resp.status === 401) {
        const siteName = url.substring(0, url.indexOf('/', 1));
        window.location = `${siteName}/login`;
      }

      if (throwAllErrors) {
        console.log('throwing...');
        throw new Error(text);
      }

      let errorBody = 'error';
      try {
        errorBody = JSON.parse(text);
      } catch (e) {}

      return {
        isError: true,
        errorBody
      }
    } else {
      if (text) {
        return JSON.parse(text);
      } else {
        return null;
      }
    }
  };
}

export default ApiClient;
