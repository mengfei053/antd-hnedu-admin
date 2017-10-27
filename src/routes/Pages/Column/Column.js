import React from 'react';
import { connect } from 'dva';
import { Tag } from 'antd'
import styles from './Column.less'
import { Row, Col, Button, Input, Table } from 'antd'
import PageLayout from '../PageLayout/PageLayout'

const columns = [{
  title: 'ID',
  dataIndex: 'id',
}, {
  title: '栏目名称',
  dataIndex: 'title',
}, {
  title: '访问路径',
  dataIndex: 'route',
}, {
  title: '排列顺序',
  dataIndex: 'order',
  render:(text,record) => (
    <span>
      <Input defaultValue={record.order}  style={{width:'50px'}}/>
    </span>
  )
},{
  title: '显示',
  dataIndex: 'isshow',
},{
  title: '状态',
  dataIndex: 'state',
},{
  title: '操作选项',
  dataIndex: 'operation',
  render:(text,record) => (
    <span>
      <a href="#">修改</a>
      <span className="ant-divider" />
      <a href="#">删除</a>
    </span>
  )
}];
const data = [
  {
    key: '1',
    id:'1',
    title: '集团介绍',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },{
    key: '2',
    id:'2',
    title: '集团介绍2',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },{
    key: '3',
    id:'3',
    title: '集团介绍3',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },{
    key: '4',
    id:'4',
    title: '集团介绍',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },{
    key: '5',
    id:'5',
    title: '集团介绍',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },{
    key: '6',
    id:'6',
    title: '集团介绍',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },{
    key: '7',
    id:'7',
    title: '集团介绍',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },{
    key: '8',
    id:'8',
    title: '集团介绍',
    route: '产品服务',
    order:'3',
    isshow:'是',
    state:'已终审',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {

  },
  getCheckboxProps: record => ({
    // disabled: record.name === 'Disabled User', // Column configuration not to be checked
  }),
};


function Column({app,location,loading,column}) {
  const  { sidebar } = column;
  const PageLayoutProps = {
    sidebar
  }
  const ColumnCompontent = (
    <div style={{}}>
      <Row style={{backgroundColor:'#fff',padding:'20px'}}>
        <Col span={6}>
          <Button type="primary">
            添加栏目
          </Button>
        </Col>
      </Row>
      <Row style={{marginTop:'4px',backgroundColor:'#fff',padding:'20px'}}>
        <Col span={24}>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </Col>
      </Row>
      <Row className={styles.bottomnav}>
        <Tag color="red">删除</Tag>
        <Tag color="blue">保存排列顺序</Tag>
      </Row>
    </div>
  )

  return (
    <PageLayout {...PageLayoutProps}>
      { ColumnCompontent }
    </PageLayout>
  );
}

Column.propTypes = {
};

export default connect(({column,loading})=>({column,loading}))(Column)
