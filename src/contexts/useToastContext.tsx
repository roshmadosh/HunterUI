import { useState, useEffect, useCallback, createContext, FunctionComponent } from "react";


type ToastContent = {
  type: 'success' | 'error',
  message: string
} | undefined;

type ToastContextType = {
  toastContent?: ToastContent,
  dispatchToastContent: React.Dispatch<React.SetStateAction<ToastContent>>,
};


type ToastProviderProps = {
  children: React.ReactNode,
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToastContext() {
  const [toastContent, dispatchToastContent] = useState<ToastContent>(undefined);
  
  const Toast: FunctionComponent = useCallback(() => {
    return ( toastContent ?
      <div className={`app-toast ${toastContent?.type}`}>
        <div className="app-toast-inner">
          <p>{toastContent?.message}</p>
          <span onClick={() => {dispatchToastContent(undefined)}}>X</span>
        </div>
      </div> :
      <div id="empty-toast"></div>
    )
  }, [toastContent]);

  const ToastProvider: FunctionComponent<ToastProviderProps> = useCallback(({children}) => {
    return (
      <ToastContext.Provider value={{ toastContent, dispatchToastContent }}>
        {children}
      </ToastContext.Provider>
    )
  }, []);

  return { toastContent, dispatchToastContent, ToastProvider, Toast } as const;
}