export const STORAGE_KEYS = {
  latestResult: "persona-os:latest-result",
  savedResults: "persona-os:saved-results",
  draftAnswers: "persona-os:draft-answers",
  latestCompatibility: "persona-os:latest-compatibility",
  friends: "persona-os:friends",
  groups: "persona-os:groups",
} as const;

function canUseStorage() {
  return typeof window !== "undefined" && "localStorage" in window;
}

export function saveToStorage<T>(key: string, value: T): void {
  if (!canUseStorage()) {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Failed to save ${key} to localStorage`, error);
  }
}

export function loadFromStorage<T>(key: string): T | null {
  if (!canUseStorage()) {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.warn(`Failed to load ${key} from localStorage`, error);
    return null;
  }
}

export function removeFromStorage(key: string): void {
  if (!canUseStorage()) {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Failed to remove ${key} from localStorage`, error);
  }
}
