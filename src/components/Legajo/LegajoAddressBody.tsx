import { useMemo } from 'react';
import styled from "styled-components";
import { theme, IDefaultTheme } from '@fravega-it/bumeran-ds-fvg';
import DataContainer from '@components/DataContainer/DataContainer';
import { Address } from 'types/type';
// import Map from '@components/Map/Map';
import dynamic from 'next/dynamic';


const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CenteredColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

interface ILegajoAddressBodyProp {
  address: Address;
}

const LegajoAddressBody = ({address}: ILegajoAddressBodyProp): JSX.Element => {
  const latitude = address.geoCoordinates && parseFloat(address.geoCoordinates.longitude);
  const longitude = address.geoCoordinates && parseFloat(address.geoCoordinates.latitude);
  // const latitude = -34.599722222222;
  // const longitude = -58.381944444444;
  const Map = useMemo(
    () => dynamic(() => import("@components/Map/Map"), { ssr: false }),
    []
  );
  const addressData: Record<string, string>[] = [
    {'city': address.city},
    {'cp': address.zipCode},
    {'street': address.street},
    {'number': address.number},
  ]
  return (
    <Centered>
      <CenteredColumn data-testid="legajo-address-body">
        <DataContainer data={addressData} columns={2} withBorder={false} background={theme.colors.white} style={{
          borderTopLeftRadius: theme.borderRadius.s,
          borderTopRightRadius: theme.borderRadius.s,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderBottom: '0px',
          borderColor:  theme.colors.neutral[300],
        }}/>
        { latitude && longitude && <Map latitude={latitude} longitude={longitude} marker={true}/> }
      </CenteredColumn>
    </Centered>
  );
};

export default LegajoAddressBody;
