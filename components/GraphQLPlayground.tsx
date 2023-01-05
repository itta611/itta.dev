import dynamic from 'next/dynamic';

const GraphQLPlayground = dynamic<any>(
  async () => {
    const [{ store, Playground }, { Provider }] = await Promise.all([
      import('graphql-playground-react'),
      import('react-redux'),
    ]);
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => {
      return (
        <Provider store={store}>
          <Playground {...props} />
        </Provider>
      );
    };
  },
  { ssr: false }
);

export default GraphQLPlayground;
