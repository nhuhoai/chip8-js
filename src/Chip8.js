/**
 *  @file       Chip8.js
 *  @version    0.1.0
 *  @date       2018-02-02
 *  @author     Nhu-Hoai Robert VO <nhuhoai.vo@nhuvo.ch>
 *  @copyright  Nhu-Hoai Robert VO
 *  @brief      Chip-8 Emulator
 */

'use strict';

function Chip8() {
  Object.defineProperty(this, 'MEMORY_SIZE', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 4096
  });

  Object.defineProperty(this, 'GFX_WIDTH', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 64
  });

  Object.defineProperty(this, 'GFX_HEIGHT', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 32
  });
}

module.exports = Chip8;
