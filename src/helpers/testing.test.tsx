// import '@testing-library/jest-dom';
import { expect } from "@jest/globals";
import { renderer } from "@helpers/testing";
import { theme } from "@fravega-it/bumeran-ds-fvg";

describe("renderer", () => {
  it("renders the renderer helper", () => {
    expect(renderer).toEqual(
      expect.objectContaining({
        create: expect.any(Function),
        renderWithTheme: expect.any(Function),
        baseRenderer: expect.any(Function),
        renderWithI18n: expect.any(Function),
      })
    );
    expect(renderer.renderWithTheme(<div />, theme)).toMatchSnapshot();
    expect(renderer.baseRenderer(<div />)).toMatchSnapshot();
    expect(renderer.renderWithI18n(<div />)).toMatchSnapshot();
  });
});
