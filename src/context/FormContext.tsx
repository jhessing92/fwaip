import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the types of CTAs available
export type CTAType = 
  | 'strategy-session' 
  | 'industry-specific' 
  | 'newsletter' 
  | 'consulting';

// Define the form context state interface
interface FormContextState {
  isFormOpen: boolean;
  formType: CTAType | null;
  industry: string | null;
  source: string | null;
  ctaText: string | null;
  email: string | null;
  showSuccessModal: boolean;
  showQuestionnaireModal: boolean;
}

// Define the form context interface with actions
interface FormContextValue extends FormContextState {
  openForm: (type: CTAType, source: string, industry?: string, ctaText?: string) => void;
  closeForm: () => void;
  setEmail: (email: string) => void;
  submitForm: (formData: any) => Promise<void>;
  showSuccess: () => void;
  hideSuccess: () => void;
  showQuestionnaire: () => void;
  hideQuestionnaire: () => void;
}

// Create the context with default values
const FormContext = createContext<FormContextValue | undefined>(undefined);

// Initial state for the form context
const initialState: FormContextState = {
  isFormOpen: false,
  formType: null,
  industry: null,
  source: null,
  ctaText: null,
  email: null,
  showSuccessModal: false,
  showQuestionnaireModal: false,
};

// Provider component
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<FormContextState>(initialState);

  const openForm = (type: CTAType, source: string, industry?: string, ctaText?: string) => {
    setState({
      ...state,
      isFormOpen: true,
      formType: type,
      industry: industry || null,
      source: source,
      ctaText: ctaText || null,
    });
  };

  const closeForm = () => {
    setState({
      ...state,
      isFormOpen: false,
    });
  };

  const setEmail = (email: string) => {
    setState({
      ...state,
      email,
    });
  };

  const submitForm = async (formData: any) => {
    // Prepare the data for the webhook
    const webhookData = {
      ...formData,
      metadata: {
        formType: state.formType,
        industry: state.industry,
        source: state.source,
        ctaText: state.ctaText,
        timestamp: new Date().toISOString(),
      }
    };

    try {
      // Log the webhook data for debugging
      console.log('Sending webhook data:', webhookData);
      
      // Send data to the webhook
      const response = await fetch('https://hook.us1.make.com/6dmijlo88kt0rf3drl5o3gv7gsj44t3c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Show appropriate modal based on form type
      if (state.formType === 'newsletter') {
        setState({
          ...state,
          showQuestionnaireModal: true,
        });
      } else {
        setState({
          ...state,
          showSuccessModal: true,
          isFormOpen: false,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (could show an error modal)
    }
  };

  const showSuccess = () => {
    setState({
      ...state,
      showSuccessModal: true,
    });
  };

  const hideSuccess = () => {
    setState({
      ...state,
      showSuccessModal: false,
    });
  };

  const showQuestionnaire = () => {
    setState({
      ...state,
      showQuestionnaireModal: true,
    });
  };

  const hideQuestionnaire = () => {
    setState({
      ...state,
      showQuestionnaireModal: false,
    });
  };

  return (
    <FormContext.Provider
      value={{
        ...state,
        openForm,
        closeForm,
        setEmail,
        submitForm,
        showSuccess,
        hideSuccess,
        showQuestionnaire,
        hideQuestionnaire,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}; 