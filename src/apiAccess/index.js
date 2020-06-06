const Api = (baseurl) => {
  async function request(endpoint, options) {
    return fetch(endpoint, {
      ...options
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  }

  return {
    trigger: ({ endpoint, options }) => {
      const passedOptions = options || {};
      const target = endpoint.replace(/^\/+/g, '');
      return request(`${baseurl}/${target}`, passedOptions);
    }
  };
};

export default Api;
