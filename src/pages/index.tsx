import React from 'react';
import GGEditor from 'gg-editor';
import { PageContainer } from '@ant-design/pro-layout';
import Demo from './demo';
import styles from './index.less';

GGEditor.setTrackable(false);

export default () => (
  <PageContainer content={'test gg-editor'} style={{ background: '#fff' }}>
    <GGEditor className={styles.editor}>
      <Demo />
    </GGEditor>
  </PageContainer>
);
