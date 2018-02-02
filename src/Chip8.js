/**
 *  @file       Chip8.js
 *  @version    0.1.0
 *  @date       2018-02-02
 *  @author     Nhu-Hoai Robert VO <nhuhoai.vo@nhuvo.ch>
 *  @copyright  Nhu-Hoai Robert VO
 *  @brief      Chip-8 Emulator
 */

'use strict';

/**
 *  Chip-8 object
 */
function Chip8() {
  /// (unsigned char) Clock speed [Hz]
  Object.defineProperty(this, 'CLOCK_SPEED', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 60
  });

  /// (unsigned short) Memory size
  Object.defineProperty(this, 'MEMORY_SIZE', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 4096
  });

  /// (unsigned short) Start address
  Object.defineProperty(this, 'MEMORY_START', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 0x200
  });

  /// (unsigned char) Registry V size
  Object.defineProperty(this, 'V_SIZE', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 16
  });

  /// (unsigned char) Stack size
  Object.defineProperty(this, 'STACK_SIZE', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 16
  });

  /// (unsigned char) Display width size
  Object.defineProperty(this, 'GFX_WIDTH', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 64
  });

  /// (unsigned char) Display height size
  Object.defineProperty(this, 'GFX_HEIGHT', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 32
  });
}

module.exports = Chip8;
