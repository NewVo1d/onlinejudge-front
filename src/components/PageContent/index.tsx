import './styles/index.css';

function PageContent(props: any) {
  const { children } = props;
  return <div className="content-container">{children}</div>;
}

export default PageContent;
