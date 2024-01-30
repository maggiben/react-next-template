import { useState, useRef, ReactNode } from 'react';
import {
  Button,
  Grid,
  GridItem,
  Link,
  TextInput,
  Select,
  SearchIcon,
  MailIcon,
} from "@fravega-it/bumeran-ds-fvg";
import { useTranslation } from 'react-i18next';
import string from '@utils/string';
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
  const [searchLabel, setSearchLabel] = useState<string>(t('dni'));
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const { onSearch } = props;

  const handleKeyDown = (key: string) => {
    // Check if the pressed key is Enter (key code 13)
    if (key === 'Enter') {
      handleOnSearch();
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
    setSearchLabel(label);
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
        const isEmail = string.validateEmail(search);
        if(!isEmail) {
          setErrorMessage(t('invalid email'));
        } else {
          setErrorMessage('')
          onSearch({
            email: search,
          });
        }
        break;
      }
    }
  }
  
  return (
    <FormContainer>
      <div style={{ width: '100%'}}>
        <Grid>
          <GridItem xs={4}>
            <div data-testid="select-document-type">
              <Select
                data-testid="documentType"
                name='documentType'
                id="documentType"
                label={`${t('search by')}...`}
                options={[
                  { id: 'dni', label: t('dni') },
                  { id: 'email', label: t('email') },
                ]}
                onChange={handleDocumentTypeChange}
                value={documentType}
              />
            </div>
          </GridItem>
          <GridItem xs={4}>
            <TextInput
              leftIcon={documentType === 'dni' ? <SearchIcon /> : <MailIcon />}
              id="search"
              name="search"
              label={searchLabel} 
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={search}
              error={Boolean(errorMessage.length)}
              errorMessage={errorMessage}
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