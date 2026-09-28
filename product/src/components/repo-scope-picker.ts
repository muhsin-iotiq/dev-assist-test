const STORAGE_KEY = 'dev-assist.repo-scope';
export function readSavedRepoScope() {
  return localStorage.getItem(STORAGE_KEY);
}
