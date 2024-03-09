export async function useFetchApiData(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);
    return result.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
