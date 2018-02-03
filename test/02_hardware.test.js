/**
 *  @file       02_hardware.test.js
 *  @version    0.1.0
 *  @date       2018-02-02
 *  @author     Nhu-Hoai Robert VO <nhuhoai.vo@nhuvo.ch>
 *  @copyright  Nhu-Hoai Robert VO
 *  @brief      Hardware test
 */

describe('Hardware', function() {
  const Chip8 = require('../src/Chip8');
  var chip8;

  beforeEach(function() {
    chip8 = new Chip8();
  });

  it('Memory', function() {
    expect(chip8.memory instanceof Uint8Array).toBeTruthy();
    expect(chip8.memory.length).toEqual(chip8.MEMORY_SIZE);
    expect(chip8.pc instanceof Uint16Array).toBeTruthy();
    expect(chip8.pc.length).toEqual(1);
    expect(chip8.opcode instanceof Uint16Array).toBeTruthy();
    expect(chip8.opcode.length).toEqual(1);
    expect(chip8.delay instanceof Uint8Array).toBeTruthy();
    expect(chip8.delay.length).toEqual(1);
  });

  it('Register', function() {
    expect(chip8.v instanceof Uint8Array).toBeTruthy();
    expect(chip8.v.length).toEqual(chip8.V_SIZE);
    expect(chip8.i instanceof Uint16Array).toBeTruthy();
    expect(chip8.i.length).toEqual(1);
  });

  it('Stack', function() {
    expect(chip8.stack instanceof Uint16Array).toBeTruthy();
    expect(chip8.stack.length).toEqual(chip8.STACK_SIZE);
    expect(chip8.sp instanceof Uint16Array).toBeTruthy();
    expect(chip8.sp.length).toEqual(1);
  });

  it('GFX', function() {
    expect(chip8.gfx instanceof Uint8Array).toBeTruthy();
    expect(chip8.gfx.length).toEqual(chip8.GFX_WIDTH * chip8.GFX_HEIGHT);
  });

  it('Sound', function() {
    expect(chip8.sound instanceof Uint8Array).toBeTruthy();
    expect(chip8.sound.length).toEqual(1);
  });

  it('Pad', function() {
    expect(chip8.pad instanceof Uint8Array).toBeTruthy();
    expect(chip8.pad.length).toEqual(chip8.PAD_SIZE);
  });
});
