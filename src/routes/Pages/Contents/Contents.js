import React from 'react';
import { connect } from 'dva';
import { Tag } from 'antd'
import styles from './Contents.less'
import { Row, Col, Button, Checkbox, Input,Select, Tabs, Table } from 'antd'
import PageLayout from '../PageLayout/PageLayout'


const TabPane = Tabs.TabPane
const Option = Select.Option

const columns = [{
  title: 'ID',
  dataIndex: 'id',
}, {
  title: '标题',
  dataIndex: 'title',
}, {
  title: '固顶基本',
  dataIndex: 'level',
  render:(text,record) => (
    <span>
      <Input defaultValue={record.level}  style={{width:'50px'}}/>
    </span>
  )
}, {
  title: '类型',
  dataIndex: 'type',
},{
  title: '发布者',
  dataIndex: 'publisher',
},{
  title: '点击',
  dataIndex: 'clickcount',
},{
  title: '发布时间',
  dataIndex: 'publishtime',
},{
  title: '状态',
  dataIndex: 'state',
},{
  title: '静态页',
  dataIndex: 'staticpage',
},{
  title: '操作选项',
  dataIndex: 'operation',
  render:(text,record) => (
    <span>
      <a href="#">查看</a>
      <span className="ant-divider" />
      <a href="#">修改</a>
      <span className="ant-divider" />
      <a href="#">删除</a>
      <span className="ant-divider" />
      <a href="#">操作记录</a>
    </span>
  )
}];

// rowSelection object indicates the need for row selection
const rowSelection = {};

function Contents({app,location,loading,contents}) {

  const  { sidebar,tableData } = contents;
  const PageLayoutProps = {
    sidebar
  }

  const ContentsCompontent = (
    <div>
      <Row style={{backgroundColor:'#fff',padding:'20px'}}>
        <Col span={6}>
          <Button type="primary">
            发布内容
          </Button>
        </Col>
        <Col span={18}>
          <Checkbox>固顶</Checkbox>
          <Checkbox>推荐</Checkbox>
          <Input placeholder="标题" style={{width:'200px',marginRight:'10px'}} />
          <Input placeholder="发布者" style={{width:'200px',marginRight:'10px'}} />
          <Select defaultValue="所有类型" style={{width:'200px',marginRight:'10px'}}>
            <Option value='所有类型'>所有类型</Option>
            <Option value='产品服务'>产品服务</Option>
            <Option value='新闻动态'>新闻动态</Option>
            <Option value='成功案例'>成功案例</Option>
          </Select>
          <Select defaultValue="固顶降，发布将" style={{width:'200px',marginRight:'10px'}}>
            <Option value='固顶降，发布将'>固顶降，发布将</Option>
            <Option value='1'>1</Option>
            <Option value='2'>2</Option>
            <Option value='3'>3</Option>
            <Option value='4'>4</Option>
            <Option value='5'>5</Option>
            <Option value='6'>6</Option>
          </Select>
          <Button type="primary">查询</Button>
        </Col>
      </Row>
      <Row className={styles.contenttable} style={{marginTop:'4px',backgroundColor:'#fff',padding:'20px'}}>
        <Col span={24}>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="所有内容" key="1" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
            <TabPane tab="投稿" key="2" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
            <TabPane tab="草稿" key="3" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
            <TabPane tab="待审" key="4" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
            <TabPane tab="已审" key="5" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
            <TabPane tab="退回" key="6" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
            <TabPane tab="归档" key="7" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
            <TabPane tab="共享内容" key="8" style={{marginTop:'4px'}}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={tableData} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <Row className={styles.bottomnav}>
        <Tag color="red">删除</Tag>
        <Tag color="pink">移动</Tag>
        <Tag color="pink">复制</Tag>
        <Tag color="green">审核</Tag>
        <Tag color="orange">退回</Tag>
        <Tag color="blue">提交</Tag>
        <Tag color="orange">生成静态页</Tag>
        <Tag color="blue">保存固顶</Tag>
        <Tag color="purple">推送至专题</Tag>
        <Tag color="blue">归档</Tag>
        <Tag color="blue">出档</Tag>
        <Tag color="green">群发微信</Tag>
      </Row>
    </div>
  )

  return (
    <PageLayout {...PageLayoutProps}>
      { ContentsCompontent }
    </PageLayout>
  );
}

Contents.propTypes = {
};

export default connect(({contents,loading})=>({contents,loading}))(Contents)
