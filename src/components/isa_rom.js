

export const rom = () => {
  const rom = [];
  // Fill with 0
  for (let i = 0; i <= 256; i++) {
    rom[i] = 0;
  }

  // RESET
  rom[0] = 0x4004;
  rom[1] = 0x1408;

  // LDA
  rom[16] = 0x4004;
  rom[17] = 0x1408;
  rom[18] = 0x4800;
  rom[19] = 0x1200;

  // ADD
  rom[32] = 0x4004;
  rom[33] = 0x1408;
  rom[34] = 0x4800;
  rom[35] = 0x1020;
  rom[36] = 0x280;


  return rom;
}

export default rom;