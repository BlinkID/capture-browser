/**
 * Copyright (c) 2023 Microblink Ltd. All rights reserved.
 *
 * ANY UNAUTHORIZED USE OR SALE, DUPLICATION, OR DISTRIBUTION
 * OF THIS PROGRAM OR ANY OF ITS PARTS, IN SOURCE OR BINARY FORMS,
 * WITH OR WITHOUT MODIFICATION, WITH THE PURPOSE OF ACQUIRING
 * UNLAWFUL MATERIAL OR ANY OTHER BENEFIT IS PROHIBITED!
 * THIS PROGRAM IS PROTECTED BY COPYRIGHT LAWS AND YOU MAY NOT
 * REVERSE ENGINEER, DECOMPILE, OR DISASSEMBLE IT.
 */

/**
 * Specifies an abstract object placed on the WebAssembly heap.
 * Objects placed on the WebAssembly heap are not cleaned up by the
 * garbage collector of the JavaScript engine. The memory used by
 * the object must be cleaned up manually by calling the delete() method.
 *
 * {@link} https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#memory-management
 */
export declare abstract class EmbindObject {
  /**
   * Cleans up the object from the WebAssembly heap.
   */
  delete(): Promise<void>;
}
