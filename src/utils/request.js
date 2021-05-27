const getRequest = async (url, page = 1, limit = 6, order = 'asc') => {

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

const searchRequest = async (url, text, amountPosts, currentPage, order='asc') => {
  if (text) {
    const response = await fetch(`${url}?_page=${currentPage}&_limit=${+amountPosts}&q=${text}&_sort=id&_order=${order}`)
    const total = response.headers.get('X-Total-Count');
    const data = await response.json();
    const meta = {};
    if (total) meta.total = total;
    return {
      data,
      total
    }
  }
}

const rangeRequest = async (url, text = '', amountPosts, currentPage, order = 'asc') => {

  if (currentPage && amountPosts) {
    const response = await fetch(`${url}?_page=${currentPage}&_limit=${amountPosts}&q=${text}&_sort=id&_order=${order}`)
      .then(response => response.json())
    
    return await response;
  }
}

export { getRequest, searchRequest, rangeRequest };