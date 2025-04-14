async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok){
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export { fetchData };