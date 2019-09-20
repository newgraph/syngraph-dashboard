import { Col, Row } from 'antd';
import GGEditor, { Koni as Graph } from 'gg-editor';

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import EditorMinimap from './components/EditorMinimap';
import { GraphContextMenu } from './components/EditorContextMenu';
import { GraphDetailPanel } from './components/EditorDetailPanel';
import { GraphItemPanel } from './components/EditorItemPanel';
import { GraphToolbar } from './components/EditorToolbar';
import styles from './index.less';

GGEditor.setTrackable(false);

export default () => (
  <PageHeaderWrapper
    content={formatMessage({
      id: 'editor-graph.description',
      defaultMessage: 'description',
    })}
  >
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <GraphToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={2} className={styles.editorSidebar}>
          <GraphItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Graph className={styles.graph} />
        </Col>
        <Col span={6} className={styles.editorSidebar}>
          <GraphDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <GraphContextMenu />
    </GGEditor>
  </PageHeaderWrapper>
);
