import { API_SITES } from '@env';

export async function getSitesApi() {
  try {
    const response = await fetch(API_SITES);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
}