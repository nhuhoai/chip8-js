/**
 *  @file       01_constants.test.js
 *  @version    0.1.0
 *  @date       2018-02-02
 *  @author     Nhu-Hoai Robert VO <nhuhoai.vo@nhuvo.ch>
 *  @copyright  Nhu-Hoai Robert VO
 *  @brief      Check constants
 */

describe('Constants', function() {
  const Chip8 = require('../src/Chip8');
  var chip8;

  beforeEach(function() {
    chip8 = new Chip8();
  });

  it('CPU constants', function() {
    chip8.MEMORY_SIZE = 0;
    expect(chip8.MEMORY_SIZE).toEqual(4096);
  });

  it('GFX constants', function() {
    chip8.GFX_WIDTH = 0;
    chip8.GFX_HEIGHT = 0;
    expect(chip8.GFX_WIDTH).toEqual(64);
    expect(chip8.GFX_HEIGHT).toEqual(32);
  });
});
