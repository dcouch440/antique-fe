declare global {
  type ReactOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
  type ReactOnSubmit = (e: React.SyntheticEvent) => void;
}

export {};
