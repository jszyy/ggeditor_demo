import { Col, Row } from 'antd';
import GGEditor, { Koni, withPropsAPI } from 'gg-editor';

import React from 'react';
import KoniContextMenu from './components/EditorContextMenu'; // 内容区操作
import KoniDetailPanel from './components/EditorDetailPanel'; // Canvas 设置
import KoniItemPanel from './components/EditorItemPanel'; // 备选区
import EditorMinimap from './components/EditorMinimap'; // 缩略图
import KoniToolbar from './components/EditorToolbar'; // 顶部操作栏
import styles from './index.less';

GGEditor.setTrackable(false);

class DemoComponent extends React.Component {
  handleClick = () => {
    const { propsAPI } = this.props as any;
    console.log('props', propsAPI);
    console.log(propsAPI.save());
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>保存</button>
        <Row className={styles.editorHd}>
          <Col span={24}>
            <KoniToolbar />
          </Col>
        </Row>
        <Row className={styles.editorBd}>
          <Col span={2} className={styles.editorSidebar}>
            <KoniItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Koni className={styles.koni} />
          </Col>
          <Col span={6} className={styles.editorSidebar}>
            <KoniDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <KoniContextMenu />
      </>
    );
  }
}

export default withPropsAPI(DemoComponent);
