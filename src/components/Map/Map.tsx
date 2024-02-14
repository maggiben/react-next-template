import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import Image from 'next/image';
import styled from "styled-components";
import L from 'leaflet';
import locationIcon_bg from '@images/locationIcon_bg.svg';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Container = styled.div`
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

  const iconMarkup = renderToStaticMarkup(
    <div style={{backgroundColor: 'transparent'}}>
      <Image src={locationIcon_bg} alt="point" width={64} height={64}/>
    </div>
  );

  const customMarkerIcon = L.divIcon({
    html: iconMarkup,
    className: '',
    iconSize: [64, 64],
    iconAnchor: [32, 32],
  });

  return (
    <Container>
      <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{width: '100%', height: '240px'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { marker &&
        <Marker icon={customMarkerIcon} position={[latitude, longitude]}>
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