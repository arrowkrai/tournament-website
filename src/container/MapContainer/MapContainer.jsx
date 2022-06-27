// import React from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map style={{ width: "100%", height: "100%" }} initialCenter={{ lat: 37.3295949, lng: -121.892514 }} google={this.props.google} zoom={14} onClick={this.onMapClicked}>
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
// })(MapContainer);
