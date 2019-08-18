const useComputeWinsAndLosses = (scores: number[]): [number, number] => {
    const wins = scores.filter(score => score === 1).length;
    const losses = scores.length - wins;

    return [wins, losses];
};

export default useComputeWinsAndLosses;
