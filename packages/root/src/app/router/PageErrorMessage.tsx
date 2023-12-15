export const PageErrorMessage = () => {
  const isDev = import.meta.env.DEV;

  return (
    <div>
      <h3>Page loading error</h3>
      {isDev && (
        <p>
          If you want to render the whole application with all micro-frontends
          run `pnpm preview` in the root of repository
        </p>
      )}
    </div>
  );
};
