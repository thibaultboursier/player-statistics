import { convertGramsToKilograms } from "./units";

it("should convert 9000 grams to 9 kilograms", () => {
  // Given
  const grams = 9000;

  // When
  const kilograms = convertGramsToKilograms(grams);

  // Then
  expect(kilograms).toBe(9);
});
