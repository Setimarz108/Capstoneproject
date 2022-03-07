import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "http://coinreolution.com/wp-content/uploads/2020/06/cryptonews.jpg";


function News({ simplified }) {
  
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });
  
 const {data} = useGetCryptosQuery(100)
  console.log("coins", data)

  if (!cryptoNews?.value) return "Loading...";

  return (

    <>

    {!simplified && (
         
      <Row gutter={[24, 24]} >
         <Col span={24}>
         <select
          showSearch
          className="select-news"
          placeholder="Select a crypto"
          optionFilterProp="children"
          onChange={(value) => setNewsCategory(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
         >
          
          <option value="Cryptocurrency"> Cryptocurrency </option>
            {data?.data?.coins.map((coin) => <option value={coin.name}>{coin.name}</option> )}
         
         </select>
         </Col>

      </Row>


   )}

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-cols-fr p-4">

      
      {cryptoNews.value.map((news, i) => (
        <div class=" flex flex-col h-50 w-full" key={i}>
          <div class=" newsCard h-full leading-normal">
            <div className="flex p-4  " style={{backgroundColor:"#133F6A", borderRadius:"22px"}}>
              <img
                className="w-20 mr-3 bg-cover bg-center mb-4 "
                src={news?.image?.thumbnail?.contentUrl || demoImage}
                alt="news"
                srcset=""
              />
              <a href={news.url} target="_blank" rel="noreferrer">
                <div class="text-indigo-100 font-bold text-l mb-2  text-ellipsis">
                  {" "}
                  {news.name}
                </div>  </a>
            </div>

            <div class="mb-5 mt-3 h-50">
                       
              <div class="max-h-30">
                <p class="text-gray-100 text-ellipsis overflow-hidden ">
                  {news.description > 50
                    ? `${news.description.substring(0, 50)}...`
                    : news.description}
                </p>
              </div>
            </div>
            <div class="flex items-center place-self-end mb-0" >
              <img
                class="w-10 h-10 rounded-full mr-4"
                src={
                  news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                }
                alt="source"
              />
              
              <div className="flex flex-col">
               <span><p class="text-gray-900 leading-none ">{news.category}</p></span>
                <span><p class="text-gray-600">
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </p></span>
            </div>

            </div> 
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default News;
