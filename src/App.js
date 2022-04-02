/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
import React,{useEffect,useState} from 'react'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
 

function App() {
  return (
   <SiderDemo/>
  );
}

 
import { Layout, Menu, Breadcrumb } from 'antd';
import {
 
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
        <Content style={{ padding: '0 50px',backgroundColor:'gray',paddingBottom:'20%',marginTop:'5%'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 580,borderRadius:10 }}>
                   <Fun   k={"welcome"}/>
                </div>
              </Content>
               
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
import firebaseDB from './Firebase.js'

import { Table, Tag, Space } from 'antd';
function Fun(props){

  var ur=window.location.href.split('%')[1]
  ur=ur.slice(2)



const [Data,setData] =useState([])

var date = new Date().getDate();
  var month = new Date().getMonth()+1 ;
  var year = new Date().getFullYear();
  
  var result = date.toString() + '-0'+ month.toString() + '-' + year.toString();


  const [se,setse]=useState(0)
  const [data,setdata]=useState([])
  useEffect(()=>{
    firebaseDB.child('OutSideWorkData/'+ur).on('value',details=>{
      let data =details.val();
      const items = Object.values(data); 
     setData(details.val())
      setdata(items)
      console.log(items)
     setse(1)
  }) 
},[Data])
 
  
 
 console.log(result)

  return(
            <div>
       
                 {se==1?
                    
                   <Fun12 da={data} day={date} mon={month} ye={year} r={result}/> :null

                 }
                 
      
            </div>
  )
}

 function Fun12(props){

 function printDocument() {
    //const input = document.getElementById('divToPrint');
  
        const doc = new jsPDF();
       
        //get table html
        const pdfTable = document.getElementById('divToPrint');
        //html to pdf format
        var html = htmlToPdfmake(pdfTable.innerHTML);
      
        const documentDefinition = { content: html };
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(documentDefinition).open();
      
  }


   return(
    <div  class="container" style={{marginTop:'5%',textAlign:'center'}}  >
 

          <div  id="divToPrint">
          <h1 >Customers Data Up to Today</h1> 
                  <h3 >Date:- {props.r}</h3>
         
  <table class="table">
  <thead class="thead-dark">
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Village</th>
      <th scope="col">Model</th>
      <th scope="col">Arrivel Date</th>
      <th scope="col">Mobile No</th>
    </tr>
  </thead>
  <tbody>
    {props.da.map((val,index)=>(
       val.Status?  parseInt(val.ArrivelDate.split("-")[1])<=props.mon && parseInt(val.ArrivelDate.split("-")[2])<=props.ye && parseInt(val.ArrivelDate.split("-")[0])<=props.day?
           
          <tr>
           
            <td>{val.Name}</td>
            <td>{val.Village}</td>
            <td>{val.Model}</td>
            <td>{val.ArrivelDate}</td>
            <td>{val.Mobileno}</td>
          </tr>:null :null
    )            
    )

    }
    
  </tbody>
</table>

  
          </div>

<button class="btn btn-primary" onClick={printDocument}>Export To PDF</button>
    
    </div> 

   )
 }

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mobile No',
    dataIndex: 'Mobile No',
    key: 'Mobile No',
  },
  {
    title: 'Village',
    dataIndex: 'Village',
    key: 'Village',
  },
  {
    title: 'Village',
    dataIndex: 'Village',
    key: 'Village',
  }
];
 
export  {App,Fun};
