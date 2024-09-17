import { create } from 'zustand';

interface CalculateState {
    num1: number;
    num2: number;
    result: number;
    setNum1: (num1: number) => void;
    setNum2: (num2: number) => void;
    calculateSum: () => void;
    calculateSubtract: () => void;
}

export const useStore = create<CalculateState>((set) => ({
    num1: 10,
    num2: 10,
    result: 0,
    setNum1: (num1) => set({ num1 }),
    setNum2: (num2) => set({ num2 }),
    calculateSum: () => set((state) => ({ result: state.num1 + state.num2 })),
    calculateSubtract: () => set((state) => ({ result: state.num1 - state.num2 })),
}));
