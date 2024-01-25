import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Heading, TextBody } from '@fravega-it/bumeran-ds-fvg'
import array from '@utils/array';

const Table = styled.table`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.neutral[200]};
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.borderRadius.s};

  th, td {
    padding: 8px;
    text-align: left;
  }

  /* Set the width of each column */
  th:nth-child(1),
  td:nth-child(1) {
    width: 33.33%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 33.33%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 33.33%;
  }
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

const Centered = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const SpaceRight = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-right: ${({ theme, size }) => theme.spacing[size]};
`;

const ClientData = ({ data, columns = 3 }: { data: Array<Record<string, string>>; columns: number}) => {
  const tuples = array.splitIntoTuples(data, columns);
  return (
    <Table>
      <tbody>
        {tuples.map((tuple, index) => (
          <tr key={index}>
            {tuple.map((value, columnIndex) => {
              return (
                <td key={columnIndex}>
                  <Centered>
                    {
                      Object.entries(value).map(([key, val]) => (
                        <>
                          <TextBody size="m" color="neutral">{key}</TextBody>
                          <SpaceRight size="s" />
                          <TextBody size="m">{val}</TextBody>
                        </>
                      ))
                    }
                  </Centered>
                </td>
              );
            })
          }
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ClientData;