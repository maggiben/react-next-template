import {
  TextBody,
  theme,
} from "@fravega-it/bumeran-ds-fvg";
import styled from "styled-components";
import { SpaceRight } from '@components/Spacing/Spacing';
import { getCountryData, TCountryCode } from 'countries-list';
import ReactCountryFlag from "react-country-flag"
import * as localization from '@utils/localization';

const CountryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

type iso2 = string;
type iso3 = string;
interface ICountryProps {
  country: iso2 | iso3;
}

const Country = ({ country }: ICountryProps): JSX.Element => {
  const constryData = country && country.length === 3 ? getCountryData(localization.countryISOMapping[country] as TCountryCode) : getCountryData(country as TCountryCode);
  return (
    <CountryWrapper>
      <TextBody>{constryData.name}</TextBody>
      <SpaceRight size="s" />
      <ReactCountryFlag
          countryCode={constryData.iso2}
          svg
          style={{
            width: theme.spacing.m,
            height: theme.spacing.m,
          }}
          title={constryData.name}
      />
    </CountryWrapper>
  );
};

export default Country;