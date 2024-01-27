import styled, { css } from "styled-components";
import { TextBody } from '@fravega-it/bumeran-ds-fvg'
import array from '@utils/array';
import { SpaceRight } from '@components/content/Spacing/Spacing';

const getColumnWidth = (index: number, width: number) => {
  return css`
  th:nth-child(${index + 1}),
  td:nth-child(${index + 1}) {
      width: ${width}%;
    }
  `;
};

const calculateColumns = (columns: number) => 
  Array.from({ length: columns}, (_, index) => getColumnWidth(index, 100 / columns)).join(String.fromCharCode(10));

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

export interface IDataContainer {
  columns?: number;
  data: Array<Record<string, string>>;
}

const DataContainer = ({ data, columns = 3 }: IDataContainer) => {
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

export default DataContainer;