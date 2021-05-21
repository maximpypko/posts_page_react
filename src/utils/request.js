const url = "https://jsonplaceholder.typicode.com/posts";

const getRequest = async (page = 1, limit = 6, order = 'asc') => {
  
  const response = await fetch(`${url}?_page=${page}&_limit=${+limit}&_sort=id&_order=${order}`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  );
  const total = response.headers.get('X-Total-Count');
  const data = await response.json();
  const meta = {};
  if (total) meta.total = total;
  return {
    data,
    total
  }
}

const searchRequest = async (text) => {
  if (text) {
    const response = await fetch(`${url}?q=${text}`)
      .then(response => response.json())
    return response;
  }
}

const rangeRequest = async (currentPage, amountPosts) => {

  if (currentPage && amountPosts) {
    const response = await fetch(`${url}?_page=${currentPage}&_limit=${amountPosts}`,
    )
      .then(response => response.json())
    return response;
  }
}

export { getRequest, searchRequest, rangeRequest };