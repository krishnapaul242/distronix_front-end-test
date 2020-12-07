import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./index";

describe("renders form component", () => {
  it("Renders Input box for Device ID.", async () => {
    render(<Form />);
    const InputDeviceID = await screen.findByPlaceholderText(/Device ID/);
    expect(InputDeviceID).toBeInTheDocument();
  });
  it("Renders Input box for Sensor ID.", async () => {
    render(<Form />);
    const InputSensorID = await screen.findByPlaceholderText(/Sensor ID/);
    expect(InputSensorID).toBeInTheDocument();
  });
  it("Renders submit button", async () => {
    render(<Form />);
    const SubmitButton = await screen.findByText(/See on Map/);
    expect(SubmitButton).toBeInTheDocument();
  });
});
