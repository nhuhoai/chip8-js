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
  //
  //  Constants
  //

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

  /// (unsigned char) Display height size
  Object.defineProperty(this, 'PAD_SIZE', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 16
  });


  //
  //  Properties (Hardware)
  //

  /// (Uint16Array) Program counter
  Object.defineProperty(this, 'pc', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint16Array(1)
  });

  /// (Uint8Array) Memory
  Object.defineProperty(this, 'memory', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint8Array(this.MEMORY_SIZE)
  });

  /// (Uint16Array) Curent opcode
  Object.defineProperty(this, 'opcode', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint16Array(1)
  });

  /// (Uint8Array) Register V
  Object.defineProperty(this, 'v', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint8Array(this.V_SIZE)
  });

  /// (Uint16Array) Index register
  Object.defineProperty(this, 'i', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint16Array(1)
  });

  /// (Uint16Array) Stack
  Object.defineProperty(this, 'stack', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint16Array(16)
  });

  /// (Uint16Array) Stack pointer
  Object.defineProperty(this, 'sp', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint16Array(1)
  });

  /// (Uint8Array) Delay timer
  Object.defineProperty(this, 'delay', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint8Array(1)
  });

  /// (Uint8Array) Sound timer
  Object.defineProperty(this, 'sound', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint8Array(1)
  });

  /// (Uint8Array) GFX
  Object.defineProperty(this, 'gfx', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint8Array(this.GFX_WIDTH * this.GFX_HEIGHT)
  });

  /// (Uint8Array) Sound timer
  Object.defineProperty(this, 'pad', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: new Uint8Array(this.PAD_SIZE)
  });
}

module.exports = Chip8;
