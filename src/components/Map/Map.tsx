import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from "styled-components";
import L from 'leaflet';
// import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Container = styled.div`
  /* border: 0.125rem solid black; */
  width: calc(100% - 2px);
  border: 0px;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  border-top: 0px;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.s};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.s};
  border-color: ${({ theme }) => theme.colors.neutral[300]};
`;

interface IMapProps {
  marker?: boolean;
  latitude: number;
  longitude: number;
}

const Map = ({latitude, longitude, marker}: IMapProps) => {

  // const LeafIcon3 = new L.Icon({
    // iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    // iconUrl: locationIcon.src,
  // });

  // const svgIcon = L.divIcon({
  //   html: `<svg color="black" fill="none" viewBox="0 0 28 28" class="sc-ipEyDJ jDYzxv"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.85 9.183a5.444 5.444 0 1 0-7.7 7.7l3.3 3.3a.777.777 0 0 0 1.1 0l3.3-3.3a5.444 5.444 0 0 0 0-7.7Zm-8.8-1.1a7 7 0 1 1 9.9 9.9l-3.3 3.3a2.332 2.332 0 0 1-3.3 0l-3.3-3.3a7 7 0 0 1 0-9.9ZM14 11.478a1.556 1.556 0 1 0 0 3.11 1.556 1.556 0 0 0 0-3.11Zm-3.111 1.555a3.111 3.111 0 1 1 6.222 0 3.111 3.111 0 0 1-6.222 0Z"></path></svg>`,
  //   className: "svg-icon",
  //   iconSize: [24, 40],
  //   iconAnchor: [12, 40]
  // });

  // const pepe = ReactDOMServer.renderToStaticMarkup(<Image alt="location" src={locationIcon} width={28} height={28}/>);
  // console.log('pepe', pepe);

  function divIcon(icon: string){
    const markerIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div style='background-color:red;' class='marker-pin'></div>`,
      iconSize: [48, 48],
      iconAnchor: [15, 42],
    });

    return markerIcon;
  }

  const svgIcon2 = L.divIcon({
    html: `<svg
        color="black"
        fill="none"
        viewBox="0 0 28 28"
        version="1.1"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
      <path
          inkscape:original-d="M 0,0"
          inkscape:path-effect="#path-effect2"
          d="m 17.85,9.183 a 5.4447222,5.4447222 0 1 0 -7.7,7.7 l 3.3,3.3 a 0.777,0.777 0 0 0 1.1,0 l 3.3,-3.3 a 5.444,5.444 0 0 0 0,-7.7 z"
          id="path2"
          style="fill:#ffffff;fill-opacity:1" />
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.85 9.183a5.444 5.444 0 1 0-7.7 7.7l3.3 3.3a.777.777 0 0 0 1.1 0l3.3-3.3a5.444 5.444 0 0 0 0-7.7Zm-8.8-1.1a7 7 0 1 1 9.9 9.9l-3.3 3.3a2.332 2.332 0 0 1-3.3 0l-3.3-3.3a7 7 0 0 1 0-9.9ZM14 11.478a1.556 1.556 0 1 0 0 3.11 1.556 1.556 0 0 0 0-3.11Zm-3.111 1.555a3.111 3.111 0 1 1 6.222 0 3.111 3.111 0 0 1-6.222 0Z"
          id="path1"
          style="fill:#000000;fill-opacity:1" />
    </svg>`,
    className: "",
    iconSize: [48, 48],
    iconAnchor: [12, 40],
  });

  return (
    <Container>
      <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{width: '100%', height: '240px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { marker &&
        <Marker icon={svgIcon2} position={[latitude, longitude]}>
          <Popup>
            A marker at ({latitude}, {longitude})
          </Popup>
        </Marker>
      }
      </MapContainer>
    </Container>
  );
};

export default Map;