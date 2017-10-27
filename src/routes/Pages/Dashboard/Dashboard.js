import React from 'react';
import {connect} from 'dva';
import {Row, Col, Icon, Tabs, Card} from 'antd'
import CountUp from 'react-countup'
import styles from './Dashboard.less'
import { withRouter } from 'dva/router'
import LineCharts from '../../../components/Charts/LineCharts/LineCharts'
import PageLayout from '../PageLayout/PageLayout'
const TabPane = Tabs.TabPane;



function Dashboard({app, loading,location ,dashboard}) {

  const  { sidebar } = dashboard;
  const PageLayoutProps = {
    sidebar
  }
  const DashboardCompontent = (
    <div style={{padding: '20px',backgroundColor:'#fff'}}>
      <Row>
        <Col span={24}>
          <h2 style={{fontSize: '16px', marginTop: '20px'}}>网站数据统计</h2>
          <div>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="今日" key="1" style={{margin:'4px 0 0 0',padding:'0 0 5px 0'}}>
                <Row gutter={16} className={styles.website}>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={7500}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>网站访问量</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="file-text" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={85}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>发布文章数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="check-square" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={350}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>待审核文章</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="sound" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={293}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>评论数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="copy" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={750}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>留言数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="edit" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={721}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>注册人数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="本周" key="2" style={{marginTop:'4px'}}>
                <Row gutter={16} className={styles.website}>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={7500}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>网站访问量</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="file-text" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={85}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>发布文章数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="check-square" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={350}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>待审核文章</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="sound" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={293}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>评论数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="copy" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={750}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>留言数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="edit" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={721}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>注册人数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="本月" key="3" style={{marginTop:'4px'}}>
                <Row gutter={16} className={styles.website}>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={7500}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>网站访问量</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="file-text" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={85}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>发布文章数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="check-square" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={350}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>待审核文章</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="sound" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={293}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>评论数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="copy" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={750}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>留言数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="edit" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={721}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>注册人数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="总" key="4" style={{marginTop:'4px'}}>
                <Row gutter={16} className={styles.website}>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={7500}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>网站访问量</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={85}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>发布文章数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={350}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>待审核文章</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={293}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>评论数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={750}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>留言数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <Card bordered={false} >
                      <Col span={10} className="website-left">
                        <Icon type="line-chart" style={{fontSize:'32px',color:'#fff'}} />
                      </Col>
                      <Col span={14} className="website-right">
                        <div>
                          <CountUp
                            className="account-balance"
                            start={0}
                            end={721}
                            duration={2.75}
                          />
                          <p style={{color:'#fff'}}>注册人数</p>
                        </div>
                      </Col>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={14} style={{height: '400px'}}>
          <div className="">
            <h2 style={{fontSize: '16px', marginTop: '20px',marginBottom:'10px'}}>访问量分析</h2>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="今日" key="1" style={{height:'300px',marginTop:'4px'}}>
                <LineCharts />
              </TabPane>
              <TabPane tab="本周" key="2" style={{height:'300px',marginTop:'4px'}}>
                <LineCharts />
              </TabPane>
              <TabPane tab="本月" key="3" style={{height:'300px',marginTop:'4px'}}>
                <LineCharts />
              </TabPane>
              <TabPane tab="总" key="4" style={{height:'300px',marginTop:'4px'}}>
                <LineCharts />
              </TabPane>
            </Tabs>
          </div>
        </Col>
        <Col span={10} style={{height: '400px'}}>
          <div className={styles.fwl_right}>
            <h2 style={{fontSize: '16px', marginTop: '20px',marginBottom:'10px'}}>访问量分析</h2>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="今日" key="1" style={{height:'300px',marginTop:'4px'}}>
                <ul className="fwl_right_ul">
                  <li>
                    <span>1</span>
                    <span>联系我们</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>2</span>
                    <span>成功案例</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>3</span>
                    <span>新闻动态</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>4</span>
                    <span>解决方案</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>5</span>
                    <span>产品服务</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>6</span>
                    <span>集团介绍</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                </ul>
              </TabPane>
              <TabPane tab="本周" key="2" style={{height:'300px',marginTop:'4px'}}>
                <ul className="fwl_right_ul">
                  <li>
                    <span>1</span>
                    <span>联系我们</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>2</span>
                    <span>成功案例</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>3</span>
                    <span>新闻动态</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>4</span>
                    <span>解决方案</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>5</span>
                    <span>产品服务</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>6</span>
                    <span>集团介绍</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                </ul>
              </TabPane>
              <TabPane tab="本月" key="3" style={{height:'300px',marginTop:'4px'}}>
                <ul className="fwl_right_ul">
                  <li>
                    <span>1</span>
                    <span>联系我们</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>2</span>
                    <span>成功案例</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>3</span>
                    <span>新闻动态</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>4</span>
                    <span>解决方案</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>5</span>
                    <span>产品服务</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>6</span>
                    <span>集团介绍</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                </ul>
              </TabPane>
              <TabPane tab="总" key="4" style={{height:'300px',marginTop:'4px'}}>
                <ul className="fwl_right_ul">
                  <li>
                    <span>1</span>
                    <span>联系我们</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>2</span>
                    <span>成功案例</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>3</span>
                    <span>新闻动态</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>4</span>
                    <span>解决方案</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>5</span>
                    <span>产品服务</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                  <li>
                    <span>6</span>
                    <span>集团介绍</span>
                    <CountUp
                      start={0}
                      end={7500}
                      duration={2.75}
                    />
                  </li>
                </ul>
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  )

  return (
    <PageLayout {...PageLayoutProps}>
      { DashboardCompontent }
    </PageLayout>
  );
}

Dashboard.propTypes = {};

export default connect(({ loading,dashboard }) => ({ loading, dashboard}))(Dashboard)
