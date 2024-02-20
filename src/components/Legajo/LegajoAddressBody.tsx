import { useMemo } from 'react';
import styled from "styled-components";
import { theme, IDefaultTheme } from '@fravega-it/bumeran-ds-fvg';
import DataContainer from '@components/DataContainer/DataContainer';
import { Address } from 'types/type';
import { useTranslation } from 'react-i18next';
import * as localization from '@utils/localization';
import { getName } from 'country-list';
import dynamic from 'next/dynamic';
import verified from '@components/Verified/Verified';

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


interface ILegajoAddressBodyProp {
  address: Address;
}

const LegajoAddressBody = ({address}: ILegajoAddressBodyProp): JSX.Element => {
  const { t } = useTranslation();
  const latitude = address.geoCoordinates && parseFloat(address.geoCoordinates.longitude);
  const longitude = address.geoCoordinates && parseFloat(address.geoCoordinates.latitude);

  const Map = useMemo(
    () => dynamic(() => import("@components/Map/Map"), { ssr: false }),
    []
  );
  
  const addressData: Record<string, string | JSX.Element>[] = [
    {[t('country')]: getName(localization.countryISOMapping[address.country]) ?? ''},
    {[t('city')]: address.city},
    {[t('province')]: address.state},
    {[t('postal code')]: address.zipCode},
    {[t('street')]: address.street},
    {[t('number')]: address.number},
    {[t('floor')]: address.floor},
    {[t('apartment')]: address.apartment ?? ''},
    {[t('between streets')]: address.betweenStreets ?? ''},
    {[t('last update')]: localization.toLocaleDateString(address.lastUseDate)},
    {[t('verified')]: verified(address.stateVerified)},
  ]
  return (
    <Centered>
      <CenteredColumn data-testid="legajo-address-body">
        <DataContainer data={addressData} columns={3} withBorder={false} background={theme.colors.white} style={{
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
