/**
 * @file This file holds paths that are in use around the application.
 * - For now paths are duplicated but because of the possibility of change in routing regarding item name change the urls will be separated.
 */

/** application paths */

/** @description given the items ID returns a string with the correct url */
export const enchantPath = (id: string): string => `/enchants/${id}`;
/** @description given the items ID returns a string with the correct url */
export const enchantUpdatePath = (id: string): string =>
  `/enchants/${id}/update`;
export const enchantsPath = '/enchants';

/** api paths */

/** @description given the items ID returns a string with the correct url for the api */
export const apiEnchantPath = (id: string): string => `/enchants/${id}`;
/** @description given the items ID returns a string with the correct url for the api */
export const apiEnchantUpdatePath = (id: string): string =>
  `/enchants/${id}/update`;
/**
 * @description the path that returns a list of items for the main enchants viewing page.
 */
export const apiEnchantsPath = '/enchants';
/**
 * @description The path that is used to upload images, files must be sent in form data. separated by unique keys
 * @example
 * {
 *  '23424344322434': [File],
 *  '23424344322435': [File],
 * }
 */
export const apiEnchantUploadPath = '/upload';
