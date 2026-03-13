import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
  onDismiss?: () => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onDismiss }) => {
  return (
    <div className="bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4">
      <AlertCircle className="text-red-500 shrink-0" size={24} />
      <p className="text-sm font-medium flex-grow">{message}</p>
      {onDismiss && (
        <button onClick={onDismiss} className="text-red-400 hover:text-red-200">
          Dismiss
        </button>
      )}
    </div>
  );
};
