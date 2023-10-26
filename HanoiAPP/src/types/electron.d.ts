export {}

declare global {
    interface Window {
        ElectronApi: {
            sendRings: (countOfRings: number) => Promise<number[][][]>
        }
    }
}