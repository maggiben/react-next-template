import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Heading, TextBody } from '@fravega-it/bumeran-ds-fvg'
import array from '@utils/array';



const getColumnWidth = (index: number, width: number) => {
  return `
  th:nth-child(${index}),
  td:nth-child(${index}) {
      width: ${width}%;
    }
  `;
};

function calculateColumns(columns: number) {
  let str = '';
  for (let index = 0; index < columns; index += 1) {
    str += getColumnWidth(index, 100 / columns);
  }
  return str;
}

const Table = styled.table<{columns: number}>`
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
  ${({ columns }) => calculateColumns(columns)}
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
    <Table columns={columns}>
      <tbody>
        {tuples.map((tuple, index) => (
          <tr key={index}>
            {tuple.map((value, columnIndex) => {
              return (
                <td key={columnIndex}>
                  {
                    Object.entries(value).map(([label, description]) => (
                      <Centered key={label}>
                        <TextBody size="m" color="neutral">{label}</TextBody>
                        <SpaceRight size="s" />
                        <TextBody size="m">{description}</TextBody>
                      </Centered>
                    ))
                  }
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