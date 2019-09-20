import { DefaultFooter, MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import DocumentTitle from 'react-document-title';
import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import Particles from 'react-particles-js';

import SelectLang from '@/components/SelectLang';
import { ConnectProps, ConnectState } from '@/models/connect';
import logo from '../assets/logo.png';
import styles from './UserLayout.less';

export interface UserLayoutProps extends ConnectProps {
  breadcrumbNameMap: { [path: string]: MenuDataItem };
}

const UserLayout: React.SFC<UserLayoutProps> = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);

  return (
    <DocumentTitle
      title={getPageTitle({
        pathname: location.pathname,
        breadcrumb,
        formatMessage,
        ...props,
      })}
    >
      <div className={styles.container}>

      <Particles canvasClassName={styles.particles}
        params={{
          "particles": {
              "number": {
                  "value": 150
              },
              "size": {
                  "value": 7
              },
              "move": {
                speed: 2
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "grab"
                  }
              }
          }
        }}/>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>
                  {`${formatMessage({ id: 'global.app.name' })}`}
                </span>
              </Link>
            </div>
            <div className={styles.desc}>
              {`${formatMessage({ id: 'global.app.desc' })}`}
            </div>
          </div>
          {children}
        </div>
        <DefaultFooter links={[]} copyright={`${formatMessage({ id: 'global.copyright' })}`} />
      </div>
    </DocumentTitle>
  );
};

export default connect(({ settings }: ConnectState) => ({
  ...settings,
}))(UserLayout);
