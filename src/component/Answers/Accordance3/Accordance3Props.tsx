export interface Accordance3Props {
    checkedNumber: number;
    checkedFakeNumber: number;
    updateParentState: (checkedNumber: number, checkedFakeNumber: number) => void;
    expectAnswer: string | null;
}
