import styled, { css } from "styled-components";
import { TextBody } from '@fravega-it/bumeran-ds-fvg'
import { splitIntoTuples } from '@utils/array';
import { SpaceRight } from '@components/Spacing/Spacing';

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

const Table = styled.table<{columns: number, withBorder?: boolean, background?: string}>`
  width: 100%;
  ${props => props.withBorder && css`
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.neutral[200]};
    border-style: solid;
    border-radius: ${({ theme }) => theme.borderRadius.s};
  `}
  th, td {
    padding: 8px;
    text-align: left;
  }

  /* Set the width of each column */
  ${({ columns }) => calculateColumns(columns)}
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  ${props => props.background && css`
    background-color: ${props.background};
  `}
`;

const Centered = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export interface IDataContainerProps {
  columns: number;
  withBorder?: boolean;
  data: Array<Record<string, string>>;
  background?: string;
}

const DataContainer = ({ data, columns, withBorder, background}: IDataContainerProps) => {
  const tuples = splitIntoTuples(data, columns);
  return (
    <Table columns={columns} withBorder={withBorder} background={background}>
      <tbody>
        {tuples.map((tuple, index) => (
          <tr key={index}>
            {tuple.map((value, columnIndex) => {
              return (
                <td key={columnIndex}>
                  {
                    Object.entries(value).map(([label, description]) => (
                      <Centered key={label}>
                        <TextBody size="m" color="neutral" as="span">{label}</TextBody>
                        <SpaceRight size="s" />
                        <TextBody size="m" as="span">{description}</TextBody>
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