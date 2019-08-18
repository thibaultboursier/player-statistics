import { renderHook } from "@testing-library/react-hooks";
import useComputeWinsAndLosses from "./useComputeWinsAndLosses";

it("should return 2 wins and 5 losses", () => {
    // Given
    const scores = [0, 1, 0, 0, 1, 0, 0];

    // When
    const { result } = renderHook(() => useComputeWinsAndLosses(scores));

    // Then
    expect(result.current[0]).toBe(2);
    expect(result.current[1]).toBe(5);
});

it("should return 3 wins and 2 losses", () => {
    // Given
    const scores = [1, 1, 0, 1, 0];

    // When
    const { result } = renderHook(() => useComputeWinsAndLosses(scores));

    // Then
    expect(result.current[0]).toBe(3);
    expect(result.current[1]).toBe(2);
});
