import React from 'react'
import millify from 'millify';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useGetCryptosQuery} from '../services/cryptoApi'
import { Card } from 'antd';
import Loader from './Loader';

function Cryptocurrencies({simplified}) {
   
  const count = simplified ? 10 : 100
   const  {data: coinsList, isFetching} = useGetCryptosQuery(count);
   const [coins, setCoins] = useState([])
   const [searchCrypto, setSearchCrypto] = useState('')

   useEffect(() => {
       
        const filteredCoins = coinsList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchCrypto.toLowerCase()));

    setCoins(filteredCoins);
 
   }, [coinsList, searchCrypto])
  
if(isFetching) return <Loader />

   return (
      <>
           {!simplified && (

             <div className="search__coins">
              <input placeholder="Search coin" type="text" onChange={ (e) => setSearchCrypto(e.target.value)}/>
          </div>     
           )}
            
            
         <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              
              {coins?.map((crypto) => (                
                <div className=" m-2 bg-white rounded-lg shadow-xl lg:flex lg:max-w-lg font-bold crypto-card" key={crypto.id}>
                    <Link to={`/crypto/${crypto.uuid}`}>
                        <Card className="flex justify-between p-10" title={`${crypto.rank}. ${crypto.name}`}
                        extra={<img className="crypto-image " src={crypto.iconUrl}/>} 
                        hoverable>
                        
                        <p className="ml-10 font-light text-emerald-500  ">Price: {millify(crypto.price)}</p>
                        <p className="ml-10 font-light text-emerald-500">Market Cap {millify(crypto.marketCap)}</p>
                        <p className="ml-10 font-light text-emerald-500">Daily Change: {millify(crypto.change)}</p>
 
                        </Card>
                    </Link>
                </div>

              ))}

         </div>
      
      </>
    )
}

export default Cryptocurrencies