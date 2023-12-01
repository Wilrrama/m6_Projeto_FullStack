export const Form = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
