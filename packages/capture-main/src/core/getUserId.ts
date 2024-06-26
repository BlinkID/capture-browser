/**
 * Copyright (c) 2024 Microblink Ltd. All rights reserved.
 *
 * ANY UNAUTHORIZED USE OR SALE, DUPLICATION, OR DISTRIBUTION
 * OF THIS PROGRAM OR ANY OF ITS PARTS, IN SOURCE OR BINARY FORMS,
 * WITH OR WITHOUT MODIFICATION, WITH THE PURPOSE OF ACQUIRING
 * UNLAWFUL MATERIAL OR ANY OTHER BENEFIT IS PROHIBITED!
 * THIS PROGRAM IS PROTECTED BY COPYRIGHT LAWS AND YOU MAY NOT
 * REVERSE ENGINEER, DECOMPILE, OR DISASSEMBLE IT.
 */

import { nanoid } from "nanoid";

const key = "capture-userid";

/**
 * Gets the user id from local storage, or generates a new one
 * @returns a unique user id
 */
export function getUserId() {
  // Users can block localStorage or other storage mechanisms
  const hasLocalStorage = testLocalStorage();

  if (!hasLocalStorage) {
    return nanoid();
  }

  const previousId = localStorage.getItem(key);
  if (previousId) {
    return previousId;
  }

  const randomId = nanoid();
  localStorage.setItem(key, randomId);
  return randomId;
}

/**
 * Tests if local storage is available in the browser
 */
export function testLocalStorage() {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch {
    return false;
  }
}
