'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type Persona = 'recruiter' | 'engineer' | 'machine' | null;

interface PersonaContextType {
  persona: Persona;
  setPersona: (p: Persona) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersona] = useState<Persona>(null);
  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error('usePersona must be used within a PersonaProvider');
  return ctx;
}
