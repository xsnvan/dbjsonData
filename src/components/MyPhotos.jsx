import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import axios from "axios";




export default function MyPhotos() {
    const [photos, setPhotos] = useState([])
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {

 const FetchData = () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => {
    setPhotos(json)
    setSearchApiData(json)
    // console.log(json);
  })
 }
 FetchData()
    
  //   axios.get('https://jsonplaceholder.typicode.com/comments')
  //     .then(res => {
  //       setComments(res.data)
  //     })
  }, [])



function HandleFilter(e) {
  if(e.target.value == '') {
    setPhotos(searchApiData)
  } else {
      const filteredData = searchApiData.filter(elem => elem.title.toLowerCase().includes(e.target.value.toLowerCase()) );
      if(filteredData.length > 0) {
        setPhotos(filteredData)
      } else {
        setPhotos([{"name": "Ma'lumot topilmadi..."}])
      }

  }
  setFilterValue(e.target.value)
}
    return (

        <>
            <Card
            // style={{
            //     width: '10rem'
            // }}
            >

                <div className="container text-center">
                    <input className='form-control mb-5 mt-5'
                        placeholder='search'
                        type="text"
                        value={filterValue}
                        onInput={e => HandleFilter(e)}
                    />
                    <div className="row myPhotoRow">
                        {
                            photos.map(photo => (
                                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                                    <div key={photo.id}>
                                        <img className="img-fluid" src={photo.url} alt="" />
                                        <CardText>{photo.id}</CardText>
                                        <CardText>{photo.title}</CardText>
                                        {/* <img src={photo.thumbnaiUrl} alt="" /> */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Card>

        </>

    )
}