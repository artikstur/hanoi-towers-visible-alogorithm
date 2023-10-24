export {};

declare global {
    interface Window {
        ElectronAPI?: {
            doClose: () => void,
            doMinimize: () => void,
            doMaximize: () => void,
        }
    }
}
