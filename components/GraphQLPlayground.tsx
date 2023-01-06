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
          <Playground
            codeTheme={{
              editorBackground: '#1A202C',
              resultBackground: '#2C313D',
              leftDrawerBackground: '#2C313D',
              rightDrawerBackground: '#2C313D',
              navigationBar: '#2C313D',
              tab: '#2C313D',
              tabInactive: '#2C313D',
              background: '#1A202C',
              icon: '#718096',
              iconHover: '#A0AEC0',
              executeButton: 'RGBA(255, 255, 255, 0.80)',
              executeButtonHover: 'RGBA(255, 255, 255, 0.92)',
              executeButtonBorder: '#1A202C',
              button: '#1A202C',
              buttonHover: 'RGBA(255, 255, 255, 0.16)',
              sidebar: '#1A202C',
              sidebarItemSessions: '#1A202C',
              sidebarItemSide: '#1A202C',
              sidebarItemActive: '#1A202C',
              sidebarBottom: '#1A202C',
            }}
            {...props}
          />
        </Provider>
      );
    };
  },
  { ssr: false }
);

export default GraphQLPlayground;
