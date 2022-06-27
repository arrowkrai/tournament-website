// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 37.3295949,
//       lng: -121.892514
//     },
//     zoom: 15
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '400px', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//           // defaultCenter={this.props.center}
//           // defaultZoom={this.props.zoom}

//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           yesIWantToUseGoogleMapApiInternals
//           onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//         >
//           <AnyReactComponent
//             lat={37.3295949}
//             lng={-121.892514}
//             text="My Marker"
//           />
          
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;



// import React from "react";
// import GoogleMapReact from "google-map-react";


// class SimpleMap extends React.Component {
//   static defaultProps = {
//     center: {
//       lat: 37.3295949,
//       lng: -121.892514
//     },
//     zoom: 14
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
//           }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           {/* {this.props.locations.map(item => {
//             if (item.address.length !== 0) {
//               return item.address.map(i => {
//                 return (
//                   <Link to={"/" + item.name} key={i.id} lat={i.lat} lng={i.lng}>
//                     <img style={markerStyle} src={pin} alt="pin" />
//                   </Link>
//                 );
//               });
//             }
//           })} */}
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;


import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMaps = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: latitude, lng: longitude },
  map,
  // label: '150 W San Carlos St, San Jose, CA 95113, USA'
  });
  return marker;
 };

 return (
   <div style={{ height: '500px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={18}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};

export default GoogleMaps;