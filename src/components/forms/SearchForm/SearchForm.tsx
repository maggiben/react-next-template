import { useState, useRef } from 'react';
import { Button, Grid, GridItem, Link, TextInput, Select, SearchIcon } from "@fravega-it/bumeran-ds-fvg";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import styled from "styled-components";

const FormContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.m};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

export type FormValues = {
  cuid?: string;
  documentType?: string;
  documentNumber?: string;
  email?: string;
}
  
const searchSchema = yup
  .object()
  .shape({
    documentType: yup.string(),
    search: yup.string(),
    documentNumber: yup.string(),
    email: yup.string().email(),
    all: yup.string(),
  })
  .test((options, ...rest) => {
    const { createError } = rest[0];
    return Object.keys(options).length <= 1 ? createError({path: 'all', message: 'Seleccione al menos una opción', params: options, type: 'global'}) : true;
  })
  .required();

type SearchFormProps = {
  onSearch: (data: FormValues) => void;
  documentType?: string;
  search?: string;
  cuid?: number;
  email?: string;
}

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>('');
  const [documentType, setDocumentType] = useState<string>('dni');
  const router = useRouter();
  const { onSearch } = props;
  

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
      onSearch({
      });
    }
  };

  const handleReset = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setSearch('');
  }

  const handleChange = (value: string) => {
    setSearch(value);
  }

  const handleDocumentTypeChange = ({id, label}: {id: string; label: string}) => {
    setDocumentType(id);
  };

  const handleOnSearch = () => {
    switch(documentType) {
      case 'dni': {
        onSearch({
          documentType,
          documentNumber: search,
        });
        break;
      }
      case 'email': {
        onSearch({
          email: search,
        });
        break;
      }
    }
  }
  
  return (
    <FormContainer>
      <div style={{ width: '100%'}}>
        <Grid>
          <GridItem xs={4}>
            <Select
              id="documentType"
              label={t('search by')}
              options={[
                { id: 'dni', label: 'DNI' },
                { id: 'email', label: 'Email' },
              ]}
              onChange={handleDocumentTypeChange}
              value={documentType}
            />
          </GridItem>
          <GridItem xs={4}>
            <TextInput
              leftIcon={<SearchIcon />}
              id="search"
              name="search"
              label={t('search')} 
              onChange={handleChange}
              value={search}
            />
          </GridItem>
          
          <GridItem xs={4} alignSelf="end" justifySelf="start">
            <Button 
              label={t('search')} 
              variant="primary"
              onClick={handleOnSearch}
            />
          </GridItem>
        </Grid>
        <SpaceTop size="s" />
        <Grid>
          <GridItem xs={4} alignSelf="end" justifySelf="start">
            <Link>
              <a onClick={handleReset}>{t('clan filters')}</a>
            </Link>
          </GridItem>
        </Grid>
      </div>
    </FormContainer>
  );
};

export default SearchForm;